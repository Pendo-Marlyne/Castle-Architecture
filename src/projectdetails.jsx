import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import ImageFrame from '../components/ImageFrame.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Gallery from '../components/Gallery.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import CTASection from '../components/CTASection.jsx';
import Reveal from '../components/Reveal.jsx';
import NotFound from './NotFound.jsx';
import { getImage } from '../data/images.js';
import { projects, getProject } from '../data/projects.js';
import { placeholder } from '../config/site.js';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProject(slug);

  // Same category first, then the rest; never the current project.
  const related = useMemo(() => {
    if (!project) return [];
    const others = projects.filter((p) => p.slug !== project.slug);
    const same = others.filter((p) => p.category === project.category);
    const rest = others.filter((p) => p.category !== project.category);
    return [...same, ...rest].slice(0, 3);
  }, [project]);

  if (!project) return <NotFound />;

  const { title, category, location, status, summary, overview, concept, objectives, approach, image, gallery, demo } =
    project;

  const i = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];

  const facts = [
    ['Category', category],
    ['Location', placeholder(location, 'Location')],
    ['Status', status],
  ];

  return (
    <>
      <SEO title={title} description={summary} path={`/projects/${project.slug}`} noindex={demo} />

      {/* Header */}
      <section className="on-light pt-10 md:pt-14">
        <div className="container-site">
          <Breadcrumbs items={[{ label: 'Projects', to: '/projects' }, { label: title }]} />
          <p className="mt-12 text-xs font-medium uppercase tracking-eyebrow text-burgundy">{category}</p>
          <h1 className="mt-4 max-w-4xl text-5xl leading-[1.05] md:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-grey-deep md:text-lg">{summary}</p>
        </div>
      </section>

      {/* Main photograph */}
      <section className="mt-10 md:mt-14" aria-label="Main project photograph">
        <div className="container-site">
          <ImageFrame
            image={getImage(image)}
            priority
            sizes="(min-width:1280px) 1200px, 100vw"
            className="aspect-[4/3] md:aspect-[21/9]"
          />
        </div>
      </section>

      {demo && (
        <div className="container-site mt-8">
          <p className="border-l-2 border-gold bg-gold/10 px-4 py-3 text-sm text-charcoal">
            <strong className="font-semibold">Demonstration project.</strong> This is sample content, not completed
            Castle work.
          </p>
        </div>
      )}

      {/* Overview and facts */}
      <section className="on-light section-y" aria-labelledby="overview-heading">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div id="overview-heading">
              <SectionHeading eyebrow="Overview" title="About the project" />
            </div>
            <div className="mt-6 space-y-5 leading-relaxed text-grey-deep">
              {overview.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>
          <dl className="h-fit border-t border-burgundy lg:col-span-4 lg:col-start-9">
            {facts.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-6 border-b border-gold/40 py-4">
                <dt className="text-xs font-medium uppercase tracking-eyebrow text-burgundy">{label}</dt>
                <dd className="text-right text-sm text-charcoal">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Concept, objectives, approach */}
      <section className="bg-white section-y" aria-label="Design details">
        <div className="container-site grid gap-14 lg:grid-cols-3">
          <Reveal>
            <h2 className="border-t border-burgundy pt-5 text-3xl text-burgundy">Design concept</h2>
            <p className="mt-4 leading-relaxed text-grey-deep">{concept}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="border-t border-burgundy pt-5 text-3xl text-burgundy">Design objectives</h2>
            <ul className="mt-4 space-y-3 text-grey-deep">
              {objectives.map((o) => (
                <li key={o} className="flex gap-3 leading-relaxed">
                  <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-gold-dark" />
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.16}>
            <h2 className="border-t border-burgundy pt-5 text-3xl text-burgundy">Design approach</h2>
            <p className="mt-4 leading-relaxed text-grey-deep">{approach}</p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      {gallery?.length > 0 && (
        <section className="on-light section-y" aria-labelledby="gallery-heading">
          <div className="container-site">
            <div id="gallery-heading">
              <SectionHeading eyebrow="Gallery" title="Project images" description="Select an image to enlarge it." />
            </div>
            <div className="mt-12">
              <Gallery keys={gallery} title={title} />
            </div>
          </div>
        </section>
      )}

      {/* Previous / next */}
      {projects.length > 1 && (
        <nav aria-label="Project navigation" className="on-light border-y border-gold/40 bg-white">
          <div className="container-site grid divide-gold/40 sm:grid-cols-2 sm:divide-x">
            <Link to={`/projects/${prev.slug}`} className="group flex items-center gap-4 py-8 sm:pr-8">
              <ArrowLeft aria-hidden="true" className="shrink-0 text-gold-dark transition-transform group-hover:-translate-x-1" />
              <span>
                <span className="block text-xs uppercase tracking-eyebrow text-grey-deep">Previous project</span>
                <span className="mt-1 block font-serif text-2xl group-hover:text-burgundy">{prev.title}</span>
              </span>
            </Link>
            <Link
              to={`/projects/${next.slug}`}
              className="group flex items-center justify-end gap-4 border-t border-gold/40 py-8 text-right sm:border-t-0 sm:pl-8"
            >
              <span>
                <span className="block text-xs uppercase tracking-eyebrow text-grey-deep">Next project</span>
                <span className="mt-1 block font-serif text-2xl group-hover:text-burgundy">{next.title}</span>
              </span>
              <ArrowRight aria-hidden="true" className="shrink-0 text-gold-dark transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </nav>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="on-light section-y" aria-labelledby="related-heading">
          <div className="container-site">
            <div id="related-heading">
              <SectionHeading eyebrow="Related Projects" title="You may also like" />
            </div>
            <ul className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <ProjectCard project={p} sizes="(min-width:768px) 33vw, 100vw" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTASection
        eyebrow="Enquire"
        title="Planning something similar?"
        text="Tell us about your site, brief and timeline, and we will discuss how Castle can help."
        primary={{ to: `/contact?project=${project.slug}`, label: 'Discuss Your Project' }}
        secondary={{ to: '/projects', label: 'Back to All Projects' }}
      />
    </>
  );
}