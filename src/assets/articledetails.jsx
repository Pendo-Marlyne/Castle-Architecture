import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Check, Facebook, Link2, Linkedin, Mail, Share2 } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import Breadcrumbs from '../components/Breadcrumbs.jsx';
import ImageFrame from '../components/ImageFrame.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ArticleCard from '../components/ArticleCard.jsx';
import CTASection from '../components/CTASection.jsx';
import NotFound from './NotFound.jsx';
import { getImage } from '../data/images.js';
import { articles, getArticle } from '../data/articles.js';
import { formatDate, readingTime } from '../utils/format.js';
import { site } from '../config/site.js';

function ShareLinks({ title, path }) {
  const [copied, setCopied] = useState(false);
  // Use the live origin so links work on any domain (preview, staging, production).
  const url = `${typeof window !== 'undefined' ? window.location.origin : site.url}${path}`;
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  const item =
    'flex min-h-[44px] items-center gap-2 border border-charcoal/25 px-4 py-2 text-xs font-medium uppercase tracking-[0.1em] text-charcoal transition-colors hover:border-burgundy hover:text-burgundy';

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt('Copy this link:', url);
    }
  };

  const ext = { target: '_blank', rel: 'noopener noreferrer' };
  return (
    <div>
      <h2 className="text-xs font-medium uppercase tracking-eyebrow text-burgundy">Share this article</h2>
      <ul className="mt-4 flex flex-wrap gap-3">
        <li>
          <a className={item} href={`https://www.linkedin.com/sharing/share-offsite/?url=${u}`} {...ext}>
            <Linkedin size={16} aria-hidden="true" /> LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <a className={item} href={`https://www.facebook.com/sharer/sharer.php?u=${u}`} {...ext}>
            <Facebook size={16} aria-hidden="true" /> Facebook<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <a className={item} href={`https://twitter.com/intent/tweet?url=${u}&text=${t}`} {...ext}>
            <Share2 size={16} aria-hidden="true" /> X<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
        <li>
          <a className={item} href={`mailto:?subject=${t}&body=${u}`}>
            <Mail size={16} aria-hidden="true" /> Email
          </a>
        </li>
        <li>
          <button type="button" className={item} onClick={copy}>
            {copied ? <Check size={16} aria-hidden="true" /> : <Link2 size={16} aria-hidden="true" />}
            {copied ? 'Link copied' : 'Copy link'}
          </button>
          <span role="status" className="sr-only">{copied ? 'Link copied to clipboard' : ''}</span>
        </li>
      </ul>
    </div>
  );
}

export default function ArticleDetails() {
  const { slug } = useParams();
  const article = getArticle(slug);

  const related = useMemo(() => {
    if (!article) return [];
    const others = articles.filter((a) => a.slug !== article.slug);
    const same = others.filter((a) => a.category === article.category);
    const rest = others.filter((a) => a.category !== article.category);
    return [...same, ...rest].slice(0, 3);
  }, [article]);

  if (!article) return <NotFound />;

  const { title, category, date, excerpt, image, body, demo } = article;
  const path = `/insights/${article.slug}`;

  // Structured data only for real (non-demo) articles.
  const jsonLd = !demo && {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    datePublished: date,
    description: excerpt,
    author: { '@type': 'Organization', name: site.name },
    publisher: { '@type': 'Organization', name: site.name },
    mainEntityOfPage: `${site.url}${path}`,
  };

  return (
    <>
      <SEO title={title} description={excerpt} path={path} type="article" noindex={demo} />
      {jsonLd && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
      )}

      <article className="on-light pt-10 md:pt-14">
        <header className="container-site">
          <Breadcrumbs items={[{ label: 'Insights', to: '/insights' }, { label: title }]} />
          <p className="mt-12 text-xs font-medium uppercase tracking-eyebrow text-burgundy">{category}</p>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[1.1] md:text-6xl">{title}</h1>
          <p className="mt-6 text-sm text-grey-deep">
            <time dateTime={date}>{formatDate(date)}</time> · {readingTime(body)} min read
          </p>
        </header>

        <div className="container-site mt-10">
          <ImageFrame
            image={getImage(image)}
            priority
            sizes="(min-width:1280px) 1200px, 100vw"
            className="aspect-[3/2] md:aspect-[21/9]"
          />
        </div>

        {demo && (
          <div className="container-site mt-8">
            <p className="border-l-2 border-gold bg-gold/10 px-4 py-3 text-sm text-charcoal">
              <strong className="font-semibold">Demonstration article.</strong> This is sample content, not published
              Castle writing.
            </p>
          </div>
        )}

        <div className="container-site section-y">
          <div className="mx-auto max-w-2xl">
            <div className="space-y-6 text-lg leading-relaxed text-charcoal/90">
              {body.map((block, i) => {
                if (typeof block === 'string') return <p key={i}>{block}</p>;
                if (block.h) return <h2 key={i} className="pt-4 text-3xl text-burgundy md:text-4xl">{block.h}</h2>;
                if (block.list)
                  return (
                    <ul key={i} className="space-y-3">
                      {block.list.map((li) => (
                        <li key={li} className="flex gap-3">
                          <span aria-hidden="true" className="mt-3.5 h-px w-4 shrink-0 bg-gold-dark" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  );
                return null;
              })}
            </div>
            <div className="mt-14 border-t border-gold/60 pt-8">
              <ShareLinks title={title} path={path} />
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-white section-y" aria-labelledby="related-articles-heading">
          <div className="container-site">
            <div id="related-articles-heading">
              <SectionHeading eyebrow="Keep Reading" title="Related articles" />
            </div>
            <ul className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-3">
              {related.map((a) => (
                <li key={a.slug}>
                  <ArticleCard article={a} sizes="(min-width:768px) 33vw, 100vw" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTASection
        title="Have a question about your own project?"
        text="Tell us about your site and ideas, and we will be glad to discuss them."
        primary={{ to: '/contact', label: 'Discuss Your Project' }}
        secondary={{ to: '/insights', label: 'Back to Insights' }}
      />
    </>
  );
}