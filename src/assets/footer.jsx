import { Link } from 'react-router-dom';
import { ArrowUp, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Wordmark, navLinks } from './Navbar.jsx';
import { site, placeholder } from '../config/site.js';
import { services } from '../data/services.js';

const socials = [
  { key: 'instagram', label: 'Instagram', Icon: Instagram },
  { key: 'linkedin', label: 'LinkedIn', Icon: Linkedin },
  { key: 'facebook', label: 'Facebook', Icon: Facebook },
];

export default function Footer() {
  const c = site.contact;
  const activeSocials = socials.filter((s) => site.social[s.key]);

  return (
    <footer className="bg-charcoal text-white/80">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Wordmark light />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">{site.description}</p>
          {activeSocials.length > 0 && (
            <ul className="mt-6 flex gap-3">
              {activeSocials.map(({ key, label, Icon }) => (
                <li key={key}>
                  <a
                    href={site.social[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (opens in a new tab)`}
                    className="flex h-10 w-10 items-center justify-center border border-white/30 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Footer">
          <h2 className="font-sans text-xs font-medium uppercase tracking-eyebrow text-gold">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="transition-colors hover:text-gold">{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-xs font-medium uppercase tracking-eyebrow text-gold">Expertise</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link to={`/expertise#${s.slug}`} className="transition-colors hover:text-gold">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-xs font-medium uppercase tracking-eyebrow text-gold">Contact</h2>
          <address className="mt-5 space-y-3 text-sm not-italic">
            <p>{c.email ? <a href={`mailto:${c.email}`} className="hover:text-gold">{c.email}</a> : placeholder(null, 'Email')}</p>
            <p>{c.phone ? <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="hover:text-gold">{c.phone}</a> : placeholder(null, 'Telephone')}</p>
            <p>{placeholder(c.address, 'Office address')}</p>
            <p>{placeholder(c.hours, 'Business hours')}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-start justify-between gap-4 py-6 text-xs sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 hover:text-gold"
            >
              Back to top <ArrowUp size={14} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}