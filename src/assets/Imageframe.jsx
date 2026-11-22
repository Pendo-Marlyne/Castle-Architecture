export default function ImageFrame({
  image,
  className = '',
  sizes = '100vw',
  priority = false,
  imgClassName = '',
}) {
  const { src, srcSet, alt, width, height, label, tone } = image;

  if (!src) {
    const dark = tone === 'dark';
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative overflow-hidden ${dark ? 'bg-burgundy text-gold/70' : 'bg-grey/20 text-grey-deep'} ${className}`}
      >
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 400 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.45"
        >
          {/* simple elevation drawing: ground line, massing and window grid */}
          <line x1="0" y1="235" x2="400" y2="235" />
          <rect x="70" y="95" width="170" height="140" />
          <rect x="240" y="140" width="95" height="95" />
          {[0, 1, 2, 3].map((i) => (
            <line key={`v${i}`} x1={110 + i * 40} y1="95" x2={110 + i * 40} y2="235" />
          ))}
          {[0, 1].map((i) => (
            <line key={`h${i}`} x1="70" y1={142 + i * 47} x2="240" y2={142 + i * 47} />
          ))}
        </svg>
        <span className="absolute bottom-3 left-3 max-w-[85%] text-[0.65rem] uppercase tracking-[0.16em] opacity-90">
          Placeholder · {label}
        </span>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        srcSet={srcSet || undefined}
        sizes={srcSet ? sizes : undefined}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}