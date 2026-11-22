
export const responsive = (base, widths, ext = 'webp') => ({
  src: `${base}-${widths[widths.length - 1]}.${ext}`,
  srcSet: widths.map((w) => `${base}-${w}.${ext} ${w}w`).join(', '),
});

const make = (label, alt, { width = 1600, height = 1000, tone = 'dark' } = {}) => ({
  src: null,
  srcSet: null,
  alt,
  label, // shown only on the placeholder
  width, // intrinsic size of the final image file; prevents layout shift
  height,
  tone, // placeholder colour: 'dark' | 'light'
});

// ---- Project galleries (demonstration content) ----
// Keys follow the pattern <prefix>1, <prefix>2, ... and are referenced by the
// `gallery` array of each project in projects.js.
const galleryShot = { width: 1600, height: 1000 };
const gallery = (prefix, label, shots) =>
  Object.fromEntries(
    shots.map(([alt, tone], i) => [`${prefix}${i + 1}`, make(`${label} ${i + 1}`, alt, { ...galleryShot, tone })])
  );

const projectGalleries = {
  ...gallery('galCourtyard', 'Courtyard house', [
    ['Central planted courtyard seen from a covered veranda', 'dark'],
    ['Living room opening onto the courtyard through full-height glazing', 'light'],
    ['Timber screen casting patterned shadows on a masonry wall', 'dark'],
  ]),
  ...gallery('galMeridian', 'Meridian offices', [
    ['Glazed office facade with a regular structural rhythm', 'light'],
    ['Open collaboration area with generous daylight', 'dark'],
    ['Quiet focus room with timber lining and a single window', 'light'],
  ]),
  ...gallery('galAtrium', 'Atrium learning centre', [
    ['Daylit central atrium with open stairs and balconies', 'dark'],
    ['Classroom with a wall of tall windows and flexible furniture', 'light'],
    ['Entrance canopy and landscaped forecourt', 'dark'],
  ]),
  ...gallery('galTerrace', 'Terrace mixed-use', [
    ['Stepped terraces with planting on a mixed-use concept model', 'light'],
    ['Ground-floor retail arcade shown in a concept view', 'dark'],
    ['Section drawing showing shops, workspace and homes stacked', 'light'],
  ]),
  ...gallery('galRidgeline', 'Ridgeline residence', [
    ['Hillside house stepping down the slope with long horizontal lines', 'dark'],
    ['Living area with a framed view across the valley', 'light'],
    ['Site plan showing the building following the contours', 'dark'],
  ]),
  ...gallery('galLoft', 'Loft interior study', [
    ['Converted loft with exposed structure and warm timber joinery', 'light'],
    ['Built-in storage wall integrated with a reading nook', 'dark'],
    ['Material palette of oak, plaster and brass samples', 'light'],
  ]),
};

export const images = {
  // Home and shared
  heroHome: make(
    'Hero: contemporary residence',
    'Contemporary residential building with large glazed openings and a textured facade',
    { width: 2400, height: 1400 }
  ),
  introMain: make(
    'Introduction: architectural detail',
    'Close view of a facade detail showing material texture and shadow lines',
    { width: 1200, height: 1500, tone: 'light' }
  ),
  philosophy: make(
    'Philosophy: interior space',
    'Light-filled interior with timber, stone and a double-height window',
    { width: 1600, height: 1000 }
  ),

  // Projects (demonstration content)
  projectCourtyard: make('Project: courtyard house', 'Residential courtyard house with a central planted court', { tone: 'dark' }),
  projectRidgeline: make('Project: hillside residence', 'Hillside residence stepping down a gently sloping site', { tone: 'light' }),
  projectMeridian: make('Project: office building', 'Mid-rise office building with a rhythmic glazed facade', { tone: 'dark' }),
  projectAtrium: make('Project: learning centre', 'Institutional building arranged around a daylit atrium', { tone: 'light' }),
  projectLoft: make('Project: loft interior', 'Converted loft interior with exposed structure and warm materials', { tone: 'dark' }),
  projectTerrace: make('Project: mixed-use concept', 'Conceptual mixed-use building with stepped terraces', { tone: 'light' }),

  // Services
  serviceDesign: make('Service: architectural design', 'Architect reviewing concept sketches and a physical model', { tone: 'dark' }),
  serviceResidential: make('Service: residential', 'Modern family home with a covered veranda and garden', { tone: 'light' }),
  serviceCommercial: make('Service: commercial', 'Commercial building entrance with a generous canopy', { tone: 'dark' }),
  serviceInterior: make('Service: interior architecture', 'Interior with built-in joinery and carefully planned circulation', { tone: 'light' }),
  serviceDocumentation: make('Service: documentation', 'Technical drawings laid out on a table with a scale rule', { tone: 'dark' }),
  serviceConsultancy: make('Service: consultancy', 'Team discussing a site plan around a table', { tone: 'light' }),
  serviceRenovation: make('Service: renovation', 'Existing building being adapted with a new contemporary extension', { tone: 'dark' }),
  serviceSustainable: make('Service: sustainable design', 'Building with deep shading, natural ventilation and planting', { tone: 'light' }),
};

const missing = make('Image missing', 'Image not found in registry');
export const getImage = (key) => images[key] ?? missing;