import { Link } from 'react-router-dom';
import { getImage } from '../data/images.js';
import { formatDate, readingTime } from '../utils/format.js';

export default function ArticleCard({ article, sizes = '(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw' }) {
  const { slug, title, category, date, excerpt, image, demo, body } = article;
  return (
    <article className="group">
      <Link to={`/insights/${slug}`} className="block">
        <div className="relative">
          <ImageFrame
            image={getImage(image)}
            sizes={sizes}
            className="aspect-[3/2]"
            imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {demo && (
            <span className="absolute right-3 top-3 bg-ivory/95 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-burgundy">
              Demonstration
            </span>
          )}
        </div>
        <p className="mt-5 text-xs font-medium uppercase tracking-eyebrow text-burgundy">{category}</p>
        <h3 className="mt-2 text-2xl leading-snug transition-colors group-hover:text-burgundy">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-grey-deep">{excerpt}</p>
        <p className="mt-4 text-xs text-grey-deep">
          <time dateTime={date}>{formatDate(date)}</time> · {readingTime(body)} min read
        </p>
      </Link>
    </article>
  );
}