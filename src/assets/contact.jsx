import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ContactForm from '../components/ContactForm.jsx';
import PlaceholderNote from '../components/PlaceholderNote.jsx';
import Button from '../components/Button.jsx';
import { site, placeholder } from '../config/site.js';
import { getService } from '../data/services.js';
import { getProject } from '../data/projects.js';

// Pre-select the project type when arriving from a service or project page.
const serviceToType = {
  'residential-architecture': 'Residential',
  'commercial-architecture': 'Commercial',
  'interior-architecture': 'Interior',
  'project-consultancy': 'Consultancy only',
  'renovation-adaptive-reuse': 'Renovation or adaptive reuse',
};
const categoryToType = {
  Residential: 'Residential', Commercial: 'Commercial', Institutional: 'Institutional',
  Interior: 'Interior', 'Mixed-use': 'Mixed-use', Conceptual: 'Other',
};

function Row({ Icon, label, children }) {
  return (
    <div className="flex gap-4 border-t border-gold/60 py-5">
      <Icon size={20} aria-hidden="true" className="mt-1 shrink-0 text-burgundy" />
      <div>
        <p className="text-xs font-medium uppercase tracking-eyebrow text-burgundy">{label}</p>
        <div className="mt-1 text-sm text-charcoal">{children}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [params] = useSearchParams();
  const c = site.contact;

  const initial = useMemo(() => {
    const service = getService(params.get('service') ?? '');
    const project = getProject(params.get('project') ?? '');
    if (service) {
      return { projectType: serviceToType[service.slug] ?? '', message: `I would like to enquire about: ${service.title}.\n\n` };
    }
    if (project) {
      return { projectType: categoryToType[project.category] ?? '', message: `I am interested in a project similar to “${project.title}”.\n\n` };
    }
    return {};
  }, [params]);

  const digits = c.whatsapp ? c.whatsapp.replace(/\D/g, '') : null;
  const btn = 'w-full sm:w-auto';

  return (
    <>
      <SEO
        title="Contact"
        description="Contact Castle Architectural Firm to discuss your project. Send an enquiry or request a consultation."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your project."
        description="Tell us about your site, your ideas and your timeline. We will get back to you to discuss the next step."
        image="contactHero"
        current="Contact"
      />

      <section className="on-light section-y" aria-labelledby="enquiry-heading">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          {/* Details */}
          <div className="lg:col-span-4">
            <div id="enquiry-heading">
              <SectionHeading eyebrow="Get in Touch" title="Contact details" as="h2" />
            </div>
            <div className="mt-10">
              <Row Icon={Mail} label="Email">
                {c.email ? <a href={`mailto:${c.email}`} className="text-burgundy underline underline-offset-2">{c.email}</a> : placeholder(null, 'Email')}
              </Row>
              <Row Icon={Phone} label="Telephone">
                {c.phone ? <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="text-burgundy underline underline-offset-2">{c.phone}</a> : placeholder(null, 'Telephone number')}
              </Row>
              <Row Icon={MapPin} label="Office">{placeholder(c.address, 'Office address')}</Row>
              <Row Icon={Clock} label="Business hours">{placeholder(c.hours, 'Business hours')}</Row>
              <Row Icon={MessageCircle} label="Social">
                {Object.values(site.social).some(Boolean) ? (
                  <ul className="flex flex-wrap gap-4">
                    {Object.entries(site.social).filter(([, url]) => url).map(([name, url]) => (
                      <li key={name}>
                        <a href={url} target="_blank" rel="noopener noreferrer" className="capitalize text-burgundy underline underline-offset-2">
                          {name}<span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  'Social media accounts to be confirmed'
                )}
              </Row>
            </div>
            <PlaceholderNote>Edit <code>src/config/site.js</code> to add the firm’s real contact details.</PlaceholderNote>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-5xl">Project enquiry</h2>
            <p className="mt-4 max-w-xl text-grey-deep">
              Complete the form and we will respond using your preferred contact method.
            </p>
            <div className="mt-10">
              <ContactForm initial={initial} />
            </div>
          </div>
        </div>
      </section>

      {/* Additional contact options */}
      <section className="bg-white section-y" aria-labelledby="options-heading">
        <div className="container-site">
          <div id="options-heading">
            <SectionHeading eyebrow="Other Ways to Reach Us" title="Prefer to talk directly?" />
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {c.email ? (
              <Button href={`mailto:${c.email}`} className={btn}><Mail size={16} aria-hidden="true" /> Email Castle</Button>
            ) : null}
            {c.phone ? (
              <Button href={`tel:${c.phone.replace(/\s/g, '')}`} variant="outline" className={btn}><Phone size={16} aria-hidden="true" /> Call Castle</Button>
            ) : null}
            {digits ? (
              <Button href={`https://wa.me/${digits}`} target="_blank" rel="noopener noreferrer" variant="gold" className={btn}>
                <MessageCircle size={16} aria-hidden="true" /> WhatsApp<span className="sr-only"> (opens in a new tab)</span>
              </Button>
            ) : null}
          </div>
          {!c.email && !c.phone && !digits && (
            <PlaceholderNote>
              Email, telephone and WhatsApp buttons appear here automatically once you add the details in{' '}
              <code>src/config/site.js</code>. Until then, the enquiry form is the contact route.
            </PlaceholderNote>
          )}
        </div>
      </section>

      {/* Location */}
      <section className="on-light section-y" aria-labelledby="location-heading">
        <div className="container-site">
          <div id="location-heading">
            <SectionHeading eyebrow="Visit" title="Our location" />
          </div>
          {c.address ? (
            <div className="mt-8">
              <p className="text-grey-deep">{c.address}</p>
              <Button
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="mt-6"
              >
                View on map<span className="sr-only"> (opens in a new tab)</span>
              </Button>
            </div>
          ) : (
            <PlaceholderNote>
              A map link appears here once the office address is added in <code>src/config/site.js</code>.
            </PlaceholderNote>
          )}
        </div>
      </section>
    </>
  );
}