// DEMONSTRATION PROJECTS. These are NOT real Castle projects.
// Replace each entry with the firm's actual portfolio, then set `demo: false`.
//
// Fields
//   slug        URL segment: /projects/<slug>. Lowercase, hyphens, unique.
//   title       project name
//   category    must match an entry in projectCategories
//   location    null shows "Location to be confirmed"
//   status      e.g. 'Completed', 'In progress', 'Concept'
//   summary     one or two sentences, used on cards
//   overview    short paragraph(s) for the detail page (array of strings)
//   concept     the central design idea (string)
//   objectives  array of strings
//   approach    how the design was developed (string)
//   image       key in images.js: the main photograph
//   gallery     array of keys in images.js (any number)
//   featured    shown on the Home page when true
//   demo        true = labelled "Demonstration" and set to noindex

export const projectCategories = [
  'Residential',
  'Commercial',
  'Institutional',
  'Interior',
  'Mixed-use',
  'Conceptual',
];

export const projects = [
  {
    slug: 'courtyard-house',
    title: 'Courtyard House',
    category: 'Residential',
    location: null,
    status: 'Demonstration',
    summary: 'A family home organised around a planted courtyard that brings light and air to every room.',
    overview: [
      'A demonstration study of a family home planned around a central planted courtyard. Living, dining and sleeping spaces open onto the court, giving each room daylight, cross-ventilation and a quiet view of greenery.',
      'The plan balances shared family areas with private retreats, so the household can come together or spend time apart without leaving the house.',
    ],
    concept:
      'The courtyard is treated as the heart of the house rather than a leftover void. Rooms are arranged around it so that daily routines pass along its edge, and the sky, planting and weather become part of the interior experience.',
    objectives: [
      'Bring daylight and natural ventilation to every room',
      'Create private outdoor space within a compact plot',
      'Offer both shared and secluded areas for the household',
      'Use durable, low-maintenance materials',
    ],
    approach:
      'Design began with the plan: a simple perimeter layout with deep verandas to control sun and rain. Materials are kept few and honest, so the house stays calm, easy to maintain and comfortable as it ages.',
    image: 'projectCourtyard',
    gallery: ['galCourtyard1', 'galCourtyard2', 'galCourtyard3'],
    featured: true,
    demo: true,
  },
  {
    slug: 'meridian-offices',
    title: 'Meridian Offices',
    category: 'Commercial',
    location: null,
    status: 'Demonstration',
    summary: 'A workplace concept balancing open collaboration areas with quiet, daylit focus spaces.',
    overview: [
      'A demonstration concept for a mid-rise office building. The design explores how a workplace can offer a lively shared floor and calm areas for concentrated work within one coherent building.',
    ],
    concept:
      'A rhythmic facade and a central circulation spine organise the building. Collaborative spaces sit along the spine, while quieter rooms are placed at the daylit edges.',
    objectives: [
      'Support different working styles within one floor plate',
      'Maximise daylight while controlling glare and heat gain',
      'Create a clear, welcoming entrance and arrival sequence',
      'Allow floors to be reconfigured as needs change',
    ],
    approach:
      'Space planning was tested against typical team sizes and daily patterns of use. Facade proportions, shading depth and circulation were developed together so the building reads clearly from the street and works well inside.',
    image: 'projectMeridian',
    gallery: ['galMeridian1', 'galMeridian2', 'galMeridian3'],
    featured: true,
    demo: true,
  },
  {
    slug: 'atrium-learning-centre',
    title: 'Atrium Learning Centre',
    category: 'Institutional',
    location: null,
    status: 'Demonstration',
    summary: 'A learning building arranged around a central atrium that encourages movement and chance encounters.',
    overview: [
      'A demonstration concept for a learning centre built around a daylit atrium. Classrooms, a library and informal study areas look onto the central space, making activity visible and welcoming.',
    ],
    concept:
      'The atrium is a shared room for the whole building: a place to meet, study and move through. Open stairs and balconies make circulation part of the learning environment.',
    objectives: [
      'Create a clear, legible building that is easy to navigate',
      'Provide flexible teaching spaces and quiet study areas',
      'Use daylight and natural ventilation to reduce reliance on mechanical systems',
      'Make the building welcoming to the wider community',
    ],
    approach:
      'The plan was organised around the movement of people through the day. Sections were studied early to balance daylight, acoustic separation and views across the atrium.',
    image: 'projectAtrium',
    gallery: ['galAtrium1', 'galAtrium2', 'galAtrium3'],
    featured: true,
    demo: true,
  },
  {
    slug: 'terrace-mixed-use',
    title: 'Terrace Mixed-Use',
    category: 'Mixed-use',
    location: null,
    status: 'Concept',
    summary: 'A concept study stacking retail, workspace and homes in a stepped terraced form.',
    overview: [
      'A demonstration concept study exploring how shops, workspace and homes can share one site. A stepped form creates terraces for residents and daylight for the spaces below.',
    ],
    concept:
      'Each level steps back from the one below, turning the roof of one use into the garden of the next. The building reads as a small vertical neighbourhood rather than a single block.',
    objectives: [
      'Combine several uses without compromising any of them',
      'Give homes private outdoor space and good daylight',
      'Activate the street with a lively ground floor',
      'Keep the structure simple and repeatable',
    ],
    approach:
      'Massing options were compared in section before any facade work began. The preferred scheme balances floor area, daylight angles and the quality of outdoor space on each terrace.',
    image: 'projectTerrace',
    gallery: ['galTerrace1', 'galTerrace2', 'galTerrace3'],
    featured: true,
    demo: true,
  },
  {
    slug: 'ridgeline-residence',
    title: 'Ridgeline Residence',
    category: 'Residential',
    location: null,
    status: 'Demonstration',
    summary: 'A hillside house that follows the contours of its site and frames long views.',
    overview: [
      'A demonstration concept for a house on a sloping site. The building steps down the hillside in a series of linked volumes, keeping excavation modest and views open.',
    ],
    concept:
      'Rather than flatten the slope, the house follows it. Each level has its own relationship to the ground and the landscape, and the view is revealed gradually as you move through the home.',
    objectives: [
      'Respect the natural contours and limit earthworks',
      'Frame the best views from principal living spaces',
      'Provide shaded outdoor terraces at each level',
      'Blend the building into its landscape setting',
    ],
    approach:
      'Site sections and a contour model came first. The plan was then fitted to the land, with materials chosen to sit quietly against the surrounding landscape.',
    image: 'projectRidgeline',
    gallery: ['galRidgeline1', 'galRidgeline2', 'galRidgeline3'],
    featured: false,
    demo: true,
  },
  {
    slug: 'loft-interior-study',
    title: 'Loft Interior Study',
    category: 'Interior',
    location: null,
    status: 'Concept',
    summary: 'An interior study that adapts an existing loft using warm, honest materials.',
    overview: [
      'A demonstration interior study for an existing loft. The proposal keeps the character of the original structure and adds warmth through carefully chosen materials and built-in joinery.',
    ],
    concept:
      'New elements are designed as part of one continuous piece of joinery: shelving, seating and storage fold into the walls so the open volume stays uncluttered.',
    objectives: [
      'Make an open volume comfortable and personal',
      'Provide generous storage without visual clutter',
      'Retain and celebrate the existing structure',
      'Choose materials that age well',
    ],
    approach:
      'Space was planned around daily routines first. A restrained palette of timber, plaster and metal was then tested in samples and lighting studies before details were developed.',
    image: 'projectLoft',
    gallery: ['galLoft1', 'galLoft2', 'galLoft3'],
    featured: false,
    demo: true,
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);