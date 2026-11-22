import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ImageFrame from './ImageFrame.jsx';
import { getImage } from '../data/images.js';
import { placeholder } from '../config/site.js';

export default function ProjectCard({ project, aspect = 'aspect-[4/3]', sizes = '(min-width:1024px) 50vw, 100vw' }) {
  const { slug, title, category, location, summary, image, demo } = project;
  return (
    <article className="group">
      <Link to={`/projects/${slug}`} className="block" aria-label={`${title}, ${category}. View project`}>
        <div className="relative overflow-hidden">
          <ImageFrame
            image={getImage(image)}
            sizes={sizes}
            className={aspect}
            imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {demo && (
            <span className="absolute right-3 top-3 bg-ivory/95 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-burgundy">
              Demonstration
            </span>
          )}
        </div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-eyebrow text-burgundy">
              {category} · <span className="text-grey-deep">{placeholder(location, 'Location')}</span>
            </p>
            <h3 className="mt-2 text-3xl text-charcoal transition-colors group-hover:text-burgundy">{title}</h3>
          </div>
          <ArrowUpRight
            aria-hidden="true"
            className="mt-2 shrink-0 text-gold transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </div>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-grey-deep">{summary}</p>
      </Link>
    </article>
  );
}