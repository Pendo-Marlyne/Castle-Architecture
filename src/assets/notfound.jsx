import SEO from '../components/SEO.jsx';
import Button from '../components/Button.jsx';

export default function NotFound() {
  return (
    <section className="container-site section-y text-center">
      <SEO title="Page not found" noindex />
      <p className="text-xs font-medium uppercase tracking-eyebrow text-burgundy">Error 404</p>
      <h1 className="mt-4 text-5xl md:text-6xl">This page could not be found</h1>
      <p className="mx-auto mt-5 max-w-md text-grey-deep">
        The page may have moved or the address may be incorrect.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button to="/">Return home</Button>
        <Button to="/projects" variant="outline">View projects</Button>
      </div>
    </section>
  );
}