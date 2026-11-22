export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false, as: Tag = 'h2' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && (
        <p className={`mb-4 text-xs font-medium uppercase tracking-eyebrow ${light ? 'text-gold' : 'text-burgundy'}`}>
          {eyebrow}
        </p>
      )}
      <Tag className={`text-4xl md:text-5xl ${light ? 'text-white' : 'text-charcoal'}`}>{title}</Tag>
      {description && (
        <p className={`mt-5 text-base leading-relaxed md:text-lg ${light ? 'text-white/80' : 'text-grey-deep'}`}>
          {description}
        </p>
      )}
    </div>
  );
}