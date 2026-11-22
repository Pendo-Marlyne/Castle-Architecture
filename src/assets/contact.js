// Vercel serverless function: POST /api/contact
// Sends the enquiry by email using the Resend REST API.
// Required environment variables (set in Vercel, never in frontend code):
//   RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL
// Optional: ALLOWED_ORIGIN (e.g. https://www.yourdomain.com) to reject other origins.

import { validate } from '../src/utils/enquiry.js';

const hits = new Map(); // best-effort rate limit; resets when the instance recycles
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

// Trim, strip control characters (prevents header/log injection), cap length.
const clean = (v, max = 5000) =>
  typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim().slice(0, max) : '';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL, ALLOWED_ORIGIN } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    return res.status(503).json({ ok: false, error: 'not_configured' });
  }

  if (ALLOWED_ORIGIN && req.headers.origin && req.headers.origin !== ALLOWED_ORIGIN) {
    return res.status(403).json({ ok: false, error: 'forbidden' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = null; }
  }
  if (!body || typeof body !== 'object' || JSON.stringify(body).length > 20000) {
    return res.status(400).json({ ok: false, error: 'bad_request' });
  }

  // Spam traps: a filled honeypot, or a form submitted implausibly fast.
  // Bots get a quiet 200 and nothing is sent.
  const tooFast = !Number.isFinite(body.startedAt) || Date.now() - body.startedAt < 3000;
  if (clean(body.website) || tooFast) {
    return res.status(200).json({ ok: true });
  }

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) {
    return res.status(429).json({ ok: false, error: 'rate_limited' });
  }

  const v = {
    name: clean(body.name, 200),
    email: clean(body.email, 300),
    phone: clean(body.phone, 50),
    organisation: clean(body.organisation, 200),
    projectType: clean(body.projectType, 100),
    location: clean(body.location, 300),
    budget: clean(body.budget, 120),
    contactMethod: clean(body.contactMethod, 30),
    message: clean(body.message, 4000),
    consultationDate: clean(body.consultationDate, 20),
    consent: body.consent === true,
  };

  const errors = validate(v);
  if (Object.keys(errors).length) {
    return res.status(422).json({ ok: false, error: 'invalid', errors });
  }

  const lines = [
    `Name: ${v.name}`,
    `Email: ${v.email}`,
    `Telephone: ${v.phone || '-'}`,
    `Organisation: ${v.organisation || '-'}`,
    `Project type: ${v.projectType}`,
    `Location: ${v.location}`,
    `Budget: ${v.budget || '-'}`,
    `Preferred contact: ${v.contactMethod}`,
    `Preferred consultation date: ${v.consultationDate || '-'}`,
    `Privacy consent: given`,
    '',
    'Project description:',
    v.message,
  ];

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: v.email,
        subject: `New project enquiry: ${v.projectType} (${v.name})`,
        text: lines.join('\n'),
      }),
    });
    if (!r.ok) {
      console.error('Email provider responded with status', r.status);
      return res.status(502).json({ ok: false, error: 'send_failed' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Email send failed:', err?.message);
    return res.status(502).json({ ok: false, error: 'send_failed' });
  }
}