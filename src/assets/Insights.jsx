import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import PageHero from '../components/PageHero.jsx';
import ArticleCard from '../components/ArticleCard.jsx';
import ImageFrame from '../components/ImageFrame.jsx';
import PlaceholderNote from '../components/PlaceholderNote.jsx';
import CTASection from '../components/CTASection.jsx';
import Button from '../components/Button.jsx';
import { getImage } from '../data/images.js';
import { articles as allArticles, articleCategories } from '../data/articles.js';
import { formatDate, readingTime } from '../utils/format.js';

const sorted = [...allArticles].sort((a, b) => b.date.localeCompare(a.date));

export default function Insights() {
  const [params, setParams] = useSearchParams();

  const categories = useMemo(
    () => articleCategories.filter((c) => sorted.some((a) => a.category === c)),
    []
  );

  const rawCategory = params.get('category');
  const category = categories.includes(rawCategory) ? rawCategory : 'All';
  const query = params.get('q') ?? '';
  const filtersActive = category !== 'All' || query.trim() !== '';

  const update = (changes) => {
    const next = new URLSearchParams(params);
    Object.entries(changes).forEach(([k, v]) => (v ? next.set(k, v) : next.delete(k)));
    setParams(next, { replace: true });
  };

  const featured = sorted.find((a) => a.featured) ?? sorted[0];

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sorted.filter(
      (a) =>
        (category === 'All' || a.category === category) &&
        (!q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q))
    );
  }, [category, query]);

  // With no filters, the featured article has its own block, so leave it out of the grid.
  const gridItems = filtersActive ? results : results.filter((a) => a.slug !== featured?.slug);

  const filterBtn = (active) =>
    `min-h-[44px] border px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-colors ${
      active
        ? 'border-burgundy bg-burgundy text-white'
        : 'border-charcoal/25 text-charcoal hover:border-burgundy hover:text-burgundy'
    }`;

  return (
    <>
      <SEO
        title="Insights"
        description="Articles and perspectives from Castle on architecture, interiors, sustainable design, construction and urban development."
        path="/insights"
      />

      <PageHero
        eyebrow="Insights"
        title="Ideas, advice and perspectives on architecture."
        description="Practical thinking on design, building and the places we make."
        image="insightsHero"
        current="Insights"
      />

      {/* Featured article */}
      {featured && !filtersActive && (
        <section className="on-light section-y pb-0 md:pb-0" aria-labelledby="featured-article-heading">
          <div className="container-site">
            <PlaceholderNote>
              Articles are demonstration content. Replace them in <code>src/data/articles.js</code>.
            </PlaceholderNote>
            <h2 id="featured-article-heading" className="sr-only">Featured article</h2>
            <article className="group mt-10 grid items-center gap-10 lg:grid-cols-12">
              <Link to={`/insights/${featured.slug}`} className="lg:col-span-7" tabIndex={-1} aria-hidden="true">
                <ImageFrame
                  image={getImage(featured.image)}
                  priority
                  sizes="(min-width:1024px) 55vw, 100vw"
                  className="aspect-[3/2]"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </Link>
              <div className="lg:col-span-5">
                <p className="text-xs font-medium uppercase tracking-eyebrow text-burgundy">
                  Featured · {featured.category}
                </p>
                <h3 className="mt-4 text-4xl leading-tight md:text-5xl">
                  <Link to={`/insights/${featured.slug}`} className="hover:text-burgundy">{featured.title}</Link>
                </h3>
                <p className="mt-5 leading-relaxed text-grey-deep">{featured.excerpt}</p>
                <p className="mt-5 text-xs text-grey-deep">
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time> · {readingTime(featured.body)} min read
                </p>
                <Button to={`/insights/${featured.slug}`} variant="outline" className="mt-8">
                  Read article <ArrowRight size={16} aria-hidden="true" />
                </Button>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Listing */}
      <section className="on-light section-y" aria-labelledby="articles-heading">
        <div className="container-site">
          <h2 id="articles-heading" className="sr-only">All articles</h2>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div role="group" aria-label="Filter articles by category" className="flex flex-wrap gap-2">
              <button
                type="button"
                aria-pressed={category === 'All'}
                onClick={() => update({ category: '' })}
                className={filterBtn(category === 'All')}
              >
                All
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={category === c}
                  onClick={() => update({ category: c })}
                  className={filterBtn(category === c)}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="w-full lg:w-80">
              <label htmlFor="article-search" className="text-xs font-medium uppercase tracking-eyebrow text-burgundy">
                Search articles
              </label>
              <div className="relative mt-2">
                <Search
                  size={18}
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-grey-deep"
                />
                <input
                  id="article-search"
                  type="search"
                  value={query}
                  onChange={(e) => update({ q: e.target.value })}
                  placeholder="e.g. daylight"
                  autoComplete="off"
                  className="min-h-[48px] w-full border border-charcoal/25 bg-white py-3 pl-10 pr-10 text-sm placeholder:text-grey-deep focus:border-burgundy"
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
            {filtersActive
              ? results.length === 0
                ? 'No articles match your filters.'
                : `Showing ${results.length} ${results.length === 1 ? 'article' : 'articles'}.`
              : 'Latest articles'}
          </p>

          {gridItems.length > 0 ? (
            <ul className="mt-10 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {gridItems.map((a) => (
                <li key={a.slug}>
                  <ArticleCard article={a} />
                </li>
              ))}
            </ul>
          ) : (
            filtersActive && (
              <div className="mt-10 border border-dashed border-gold bg-white px-6 py-16 text-center">
                <h3 className="text-3xl">Nothing found</h3>
                <p className="mx-auto mt-3 max-w-md text-sm text-grey-deep">
                  Try different words or remove the category filter.
                </p>
                <Button type="button" onClick={() => setParams({}, { replace: true })} variant="outline" className="mt-8">
                  Clear all filters
                </Button>
              </div>
            )
          )}
        </div>
      </section>

      <CTASection
        title="Want to talk through your own project?"
        text="Articles are a starting point. A conversation about your site and brief is the best next step."
        primary={{ to: '/contact', label: 'Request a Consultation' }}
        secondary={{ to: '/projects', label: 'Explore Our Work' }}
      />
    </>
  );
}