import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import PageHero from '../components/PageHero.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import PlaceholderNote from '../components/PlaceholderNote.jsx';
import CTASection from '../components/CTASection.jsx';
import Button from '../components/Button.jsx';
import { projects, projectCategories } from '../data/projects.js';

// Filter state lives in the URL: /projects?category=Residential&q=court
export default function Portfolio() {
  const [params, setParams] = useSearchParams();

  // Only offer categories that currently contain at least one project.
  const categories = useMemo(
    () => projectCategories.filter((c) => projects.some((p) => p.category === c)),
    []
  );

  const rawCategory = params.get('category');
  const category = categories.includes(rawCategory) ? rawCategory : 'All';
  const query = params.get('q') ?? '';

  const update = (changes) => {
    const next = new URLSearchParams(params);
    Object.entries(changes).forEach(([key, value]) => (value ? next.set(key, value) : next.delete(key)));
    setParams(next, { replace: true });
  };

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter(
      (p) => (category === 'All' || p.category === category) && (!q || p.title.toLowerCase().includes(q))
    );
  }, [category, query]);

  const reset = () => setParams({}, { replace: true });
  const filtersActive = category !== 'All' || query.trim() !== '';

  const filterBtn = (active) =>
    `min-h-[44px] border px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-colors ${
      active
        ? 'border-burgundy bg-burgundy text-white'
        : 'border-charcoal/25 text-charcoal hover:border-burgundy hover:text-burgundy'
    }`;

  return (
    <>
      <SEO
        title="Projects and Portfolio"
        description="Browse Castle's architectural portfolio: residential, commercial, institutional, interior and mixed-use projects."
        path="/projects"
      />

      <PageHero
        eyebrow="Projects and Portfolio"
        title="Work shaped by site, brief and craft."
        description="Explore a selection of residential, commercial and institutional projects, and the thinking behind each one."
        image="projectsHero"
        current="Projects"
      />

      <section className="on-light section-y" aria-labelledby="portfolio-heading">
        <div className="container-site">
          <h2 id="portfolio-heading" className="sr-only">Project portfolio</h2>

          <PlaceholderNote>
            The projects shown are demonstration content, not completed Castle work. Replace them in{' '}
            <code>src/data/projects.js</code> when the firm’s portfolio is ready.
          </PlaceholderNote>

          {/* Controls */}
          <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
              <button
                type="button"
                aria-pressed={category === 'All'}
                onClick={() => update({ category: '' })}
                className={filterBtn(category === 'All')}
              >
                All ({projects.length})
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={category === c}
                  onClick={() => update({ category: c })}
                  className={filterBtn(category === c)}
                >
                  {c} ({projects.filter((p) => p.category === c).length})
                </button>
              ))}
            </div>

            <div className="w-full lg:w-80">
              <label htmlFor="project-search" className="text-xs font-medium uppercase tracking-eyebrow text-burgundy">
                Search by project title
              </label>
              <div className="relative mt-2">
                <Search
                  size={18}
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-grey-deep"
                />
                <input
                  id="project-search"
                  type="search"
                  value={query}
                  onChange={(e) => update({ q: e.target.value })}
                  placeholder="e.g. Courtyard"
                  autoComplete="off"
                  className="min-h-[48px] w-full border border-charcoal/25 bg-white py-3 pl-10 pr-10 text-sm text-charcoal placeholder:text-grey-deep focus:border-burgundy"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => update({ q: '' })}
                    className="absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-grey-deep hover:text-burgundy"
                  >
                    <X size={16} aria-hidden="true" />
                    <span className="sr-only">Clear search</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          <p role="status" aria-live="polite" className="mt-8 text-sm text-grey-deep">
            {results.length === 0
              ? 'No projects match your filters.'
              : `Showing ${results.length} ${results.length === 1 ? 'project' : 'projects'}${
                  category !== 'All' ? ` in ${category}` : ''
                }${query.trim() ? ` matching “${query.trim()}”` : ''}.`}
          </p>

          {/* Grid */}
          {results.length > 0 ? (
            <ul className="mt-10 grid gap-x-10 gap-y-16 sm:grid-cols-2">
              {results.map((p) => (
                <li key={p.slug}>
                  <ProjectCard project={p} sizes="(min-width:1024px) 40vw, (min-width:640px) 50vw, 100vw" />
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-10 border border-dashed border-gold bg-white px-6 py-16 text-center">
              <h3 className="text-3xl">Nothing found</h3>
              <p className="mx-auto mt-3 max-w-md text-sm text-grey-deep">
                Try a different title or remove the category filter.
              </p>
              {filtersActive && (
                <Button type="button" onClick={reset} variant="outline" className="mt-8">
                  Clear all filters
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Have a project of your own?"
        text="Tell us about your site and ambitions. We would be glad to discuss how Castle can help."
        primary={{ to: '/contact', label: 'Start a Project' }}
        secondary={{ to: '/expertise', label: 'Discover Our Expertise' }}
      />
    </>
  );
}