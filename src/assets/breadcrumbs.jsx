import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// items: [{ label, to }]. The last item is the current page (omit `to`).
export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.14em] text-grey-deep">
        <li>
          <Link to="/" className="hover:text-burgundy">Home</Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <ChevronRight size={12} aria-hidden="true" />
            {item.to ? (
              <Link to={item.to} className="hover:text-burgundy">{item.label}</Link>
            ) : (
              <span aria-current="page" className="text-burgundy">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}