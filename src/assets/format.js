// Dates are ISO strings (YYYY-MM-DD). UTC avoids off-by-one-day shifts.
export const formatDate = (iso) =>
  new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(iso)
  );

// Article body blocks: string (paragraph) | { h } (subheading) | { list: [] }
export const readingTime = (body) => {
  const text = body
    .map((b) => (typeof b === 'string' ? b : b.h ? b.h : (b.list || []).join(' ')))
    .join(' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
};