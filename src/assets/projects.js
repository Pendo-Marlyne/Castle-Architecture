// DEMONSTRATION PROJECTS. These are NOT real Castle projects.
// Replace with the firm's actual portfolio. Stage 4 adds the detail-page fields
// (concept, objectives, approach, gallery) to this same model.

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
    location: null, // null shows "Location to be confirmed"
    status: 'Demonstration',
    summary: 'A family home organised around a planted courtyard that brings light and air to every room.',
    image: 'projectCourtyard',
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
    image: 'projectMeridian',
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
    image: 'projectAtrium',
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
    image: 'projectTerrace',
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
    image: 'projectRidgeline',
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
    image: 'projectLoft',
    featured: false,
    demo: true,
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);