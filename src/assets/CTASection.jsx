import Button from './Button.jsx';
import Reveal from './Reveal.jsx';

export default function CTASection({
  eyebrow = 'Begin a conversation',
  title = 'Have a project in mind?',
  text = 'Tell us about your site, your ideas and your timeline. We will respond to discuss how Castle can help.',
  primary = { to: '/contact', label: 'Request a Consultation' },
  secondary = { to: '/projects', label: 'Explore Our Work' },
}) {
  return (
    <section className="bg-burgundy text-white" aria-labelledby="cta-heading">
      <div className="container-site section-y">
        <Reveal className="mx-auto max-w-3xl border-y border-gold/50 py-16 text-center">
          <p className="text-xs font-medium uppercase tracking-eyebrow text-gold">{eyebrow}</p>
          <h2 id="cta-heading" className="mt-4 text-4xl md:text-6xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{text}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to={primary.to} variant="gold">{primary.label}</Button>
            {secondary && (
              <Button to={secondary.to} variant="outlineLight">{secondary.label}</Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}