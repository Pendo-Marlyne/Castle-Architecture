import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ImageFrame from './ImageFrame.jsx';
import { getImage } from '../data/images.js';

export default function ServiceCard({ service, index }) {
  const { slug, title, short, image } = service;
  return (
    <article className="group border-t border-gold/60 pt-6">
      <Link to={`/expertise#${slug}`} className="block">
        <ImageFrame
          image={getImage(image)}
          sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
          className="aspect-[4/5]"
          imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <p className="mt-6 text-xs font-medium tracking-eyebrow text-burgundy">
          {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="mt-2 text-2xl leading-snug">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-grey-deep">{short}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-burgundy">
          Learn more
          <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </article>
  );
}