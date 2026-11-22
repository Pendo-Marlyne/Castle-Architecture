import SEO from '../components/SEO.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import { site, placeholder } from '../config/site.js';

// DRAFT TEMPLATE. Not legal advice and not a statement of compliance with any
// law. Have it reviewed against the data-protection rules that apply to the firm.
export default function Privacy() {
  const c = site.contact;
  const sections = [
    {
      h: 'Who we are',
      p: [`${site.name} operates this website. For privacy questions, contact us at ${placeholder(c.email, 'the email address')}.`],
    },
    {
      h: 'What we collect',
      p: [
        'When you send an enquiry we collect the details you enter: your name, email address, telephone number, organisation, project type, project location, budget, preferred contact method, project description, preferred consultation date, and your consent.',
      ],
    },
    {
      h: 'How we use it',
      p: ['We use this information to respond to your enquiry and to discuss your project. We do not sell your information.'],
    },
    {
      h: 'How it is sent and stored',
      p: [
        'Enquiries are transmitted over an encrypted connection and delivered to us by email through an email delivery provider acting on our behalf. Enquiries are then held in our email system.',
      ],
    },
    {
      h: 'How long we keep it',
      p: ['[Retention period to be confirmed by the firm.]'],
    },
    {
      h: 'Your choices and rights',
      p: [
        'You may ask us to access, correct or delete the personal information you have sent us, by contacting us using the details above. [Rights and process to be confirmed against applicable law.]',
      ],
    },
    {
      h: 'Cookies and analytics',
      p: ['[To be completed. State here whether the site uses cookies or analytics tools once any are added.]'],
    },
    {
      h: 'Changes',
      p: ['We may update this notice. The latest version will always be available on this page.'],
    },
  ];

  return (
    <>
      <SEO title="Privacy Policy" description="How Castle Architectural Firm handles information sent through this website." path="/privacy" />
      <section className="on-light section-y">
        <div className="container-site">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <h1 className="mt-12 text-5xl md:text-6xl">Privacy Policy</h1>
          <p className="mt-6 max-w-2xl border-l-2 border-gold bg-gold/10 px-4 py-3 text-sm">
            <strong className="font-semibold">Draft for review.</strong> This notice is a starting template and must be
            reviewed and completed by the firm before launch.
          </p>
          <div className="mt-12 max-w-2xl space-y-10">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="text-3xl text-burgundy">{s.h}</h2>
                {s.p.map((t) => (
                  <p key={t} className="mt-3 leading-relaxed text-grey-deep">{t}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}