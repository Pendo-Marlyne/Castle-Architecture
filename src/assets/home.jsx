import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import Button from '../components/Button.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ImageFrame from '../components/ImageFrame.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import CTASection from '../components/CTASection.jsx';
import Reveal from '../components/Reveal.jsx';
import { getImage } from '../data/images.js';
import { projects } from '../data/projects.js';
import { services } from '../data/services.js';
import { site } from '../config/site.js';

// Editable copy. These are statements of intent, not factual claims about
// experience, awards or credentials. Confirm wording with the firm.
const values = [
  { title: 'Clarity', text: 'Clear thinking, clear communication and clear decisions at every stage.' },
  { title: 'Craft', text: 'Careful attention to proportion, detail and the quality of materials.' },
  { title: 'Collaboration', text: 'Working with clients, consultants and builders as one team.' },
  { title: 'Responsibility', text: 'Designing for people, place and the long-term life of a building.' },
];

const philosophy = [
  { title: 'Functionality', text: 'Buildings should work well every day. Plans, circulation and services are resolved before they are decorated.' },
  { title: 'Sustainability', text: 'Orientation, shading, ventilation and durable materials are considered from the first sketch.' },
  { title: 'Innovation', text: 'We explore new ideas where they serve the brief, and rely on proven solutions where they serve it better.' },
  { title: 'Contextual design', text: 'Every site has a climate, a history and neighbours. Good design responds to all three.' },
  { title: 'Spatial experience', text: 'Light, scale, proportion and sequence shape how a space feels, not just how it looks.' },
  { title: 'Material selection', text: 'Materials are chosen for how they age, how they feel and how responsibly they can be sourced.' },
];

const whyCastle = [
  { title: 'Design-led', text: 'Ideas come first, supported by technical rigour rather than driven by it.' },
  { title: 'Client-centred', text: 'Your brief, budget and aspirations shape the work from the first meeting.' },
  { title: 'Clear process', text: 'A structured journey so you always know what stage you are in and what comes next.' },
  { title: 'Attention to detail', text: 'The details people touch and see every day receive the most care.' },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);
  const featuredServices = services.filter((s) => s.featured).slice(0, 4);

  return (
    <>
      <SEO
        title="Architecture and Design"
        description="Castle is a design-led architectural practice creating thoughtful, functional and enduring residential, commercial and institutional spaces. Start a project with us."
        path="/"
      />

      {/* A. HERO */}
      <section className="relative isolate flex min-h-[calc(100svh-5rem)] items-end overflow-hidden bg-charcoal text-white">
        <ImageFrame image={getImage('heroHome')} priority sizes="100vw" className="absolute inset-0 -z-20" />
        <div className="absolute inset-0 -z-10 bg-charcoal/55" aria-hidden="true" />
        <div className="container-site pb-16 pt-32 md:pb-24">
          <p className="text-xs font-medium uppercase tracking-eyebrow text-gold">
            Design-led architectural practice
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Architecture That Shapes How We Live, Work and Experience Space.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            Castle is a design-led architectural practice committed to creating thoughtful, functional and enduring
            spaces for homes, businesses and institutions.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/contact" variant="gold">Start a Project</Button>
            <Button to="/projects" variant="outlineLight">Explore Our Work</Button>
          </div>
          <p className="mt-10 max-w-md border-l border-gold pl-4 text-sm text-white/75">
            For homeowners, developers, investors and organisations planning to build, renovate or reimagine a property.
          </p>
        </div>
      </section>

      {/* B. INTRODUCTION */}
      <section className="on-light section-y" aria-labelledby="intro-heading">
        <div className="container-site grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <ImageFrame
              image={getImage('introMain')}
              sizes="(min-width:1024px) 40vw, 100vw"
              className="aspect-[4/5]"
            />
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
            <SectionHeading
              eyebrow="The Practice"
              title="Considered architecture, shaped around people and place."
              as="h2"
            />
            <p className="mt-6 leading-relaxed text-grey-deep">
              {site.name} approaches every commission as a conversation between a client's ambitions, the character of a
              site and the discipline of good design. Our philosophy is simple: a building should be beautiful to
              experience, practical to use and responsible in how it is made.
            </p>
            <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="border-t border-gold/60 pt-4">
                  <dt className="font-serif text-2xl text-burgundy">{v.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-grey-deep">{v.text}</dd>
                </div>
              ))}
            </dl>
            <Button to="/about" variant="outline" className="mt-10">
              About the Practice <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </Reveal>
        </div>
        <h2 id="intro-heading" className="sr-only">Introduction to Castle Architectural Firm</h2>
      </section>

      {/* C. FEATURED PROJECTS */}
      <section className="bg-white section-y" aria-labelledby="featured-heading">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected Work"
              title="Featured projects"
              description="Demonstration content shown while the firm's portfolio is being prepared."
            />
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-burgundy hover:text-gold-dark"
            >
              View all projects <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <span id="featured-heading" className="sr-only">Featured projects</span>

          {/* Asymmetric editorial grid */}
          <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-12">
            {featuredProjects.map((p, i) => {
              const layout = [
                'md:col-span-7',
                'md:col-span-5 md:mt-28',
                'md:col-span-5',
                'md:col-span-7 md:mt-16',
              ][i];
              const aspect = i % 2 === 0 ? 'aspect-[4/3]' : 'aspect-[4/5]';
              return (
                <Reveal key={p.slug} className={layout} delay={(i % 2) * 0.1}>
                  <ProjectCard project={p} aspect={aspect} sizes="(min-width:768px) 55vw, 100vw" />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* D. EXPERTISE */}
      <section className="on-light section-y" aria-labelledby="expertise-heading">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div id="expertise-heading">
              <SectionHeading
                eyebrow="Our Expertise"
                title="Services for every stage of a project"
                description="From first sketches to coordinated documentation, we support clients across residential, commercial and institutional work."
              />
            </div>
            <Link
              to="/expertise"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-burgundy hover:text-gold-dark"
            >
              Discover Our Expertise <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <ServiceCard service={s} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* E. DESIGN PHILOSOPHY */}
      <section className="bg-charcoal text-white" aria-labelledby="philosophy-heading">
        <div className="grid lg:grid-cols-2">
          <ImageFrame
            image={getImage('philosophy')}
            sizes="(min-width:1024px) 50vw, 100vw"
            className="min-h-[320px] lg:min-h-full"
          />
          <div className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
            <div id="philosophy-heading">
              <SectionHeading
                light
                eyebrow="Design Philosophy"
                title="Six principles behind every design"
              />
            </div>
            <ol className="mt-12 space-y-8">
              {philosophy.map((p, i) => (
                <li key={p.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-white/15 pt-6">
                  <span className="font-serif text-2xl text-gold">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-2xl text-white">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Button to="/approach" variant="outlineLight" className="mt-12">
              Our Approach <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* F. WHY CASTLE */}
      <section className="on-light section-y" aria-labelledby="why-heading">
        <div className="container-site grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4" id="why-heading">
            <SectionHeading
              eyebrow="Why Castle"
              title="What you can expect when you work with us"
            />
          </div>
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-8">
            {whyCastle.map((w, i) => (
              <Reveal key={w.title} delay={(i % 2) * 0.08}>
                <h3 className="border-t border-burgundy pt-5 text-3xl text-burgundy">{w.title}</h3>
                <p className="mt-3 leading-relaxed text-grey-deep">{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* G. CTA */}
      <CTASection />
    </>
  );
}