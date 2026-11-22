import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button.jsx';

export const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About the Practice' },
  { to: '/expertise', label: 'Our Expertise' },
  { to: '/projects', label: 'Projects' },
  { to: '/approach', label: 'Our Approach' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
];

export function Wordmark({ light = false }) {
  return (
    <span className="flex flex-col leading-none">
      <span className={`font-serif text-3xl tracking-[0.18em] ${light ? 'text-white' : 'text-burgundy'}`}>CASTLE</span>
      <span className={`mt-1 text-[0.6rem] uppercase tracking-[0.32em] ${light ? 'text-gold' : 'text-grey-deep'}`}>
        Architectural Firm
      </span>
    </span>
  );
}

const linkCls = ({ isActive }) =>
  `relative py-2 text-[0.8rem] font-medium uppercase tracking-[0.1em] transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gold after:transition-all ${
    isActive
      ? 'text-burgundy after:w-full'
      : 'text-charcoal hover:text-burgundy after:w-0 hover:after:w-full'
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className={`on-light sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? 'border-gold/30 bg-ivory/95 backdrop-blur' : 'border-transparent bg-ivory'
      }`}
    >
      <div className="container-site flex h-20 items-center justify-between">
        <Link to="/" aria-label="Castle Architectural Firm, home">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkCls}>
              {l.label}
            </NavLink>
          ))}
          <Button to="/contact" variant="primary" className="!px-5 !py-2.5 !min-h-0 !text-xs">
            Start a Project
          </Button>
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-12 w-12 items-center justify-center text-burgundy xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-20 bottom-0 overflow-y-auto bg-ivory xl:hidden"
        >
          <nav aria-label="Mobile" className="container-site flex flex-col py-8">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `border-b border-charcoal/10 py-4 font-serif text-3xl ${
                    isActive ? 'text-burgundy' : 'text-charcoal'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button to="/contact" className="mt-8">Start a Project</Button>
          </nav>
        </div>
      )}
    </header>
  );
}