// DEMONSTRATION ARTICLES. Not written by or attributed to Castle.
// To add an article: copy an entry, give it a unique slug, and add it to the array.
//
// Fields
//   slug, title, category (see articleCategories), date (YYYY-MM-DD), excerpt
//   image    key in images.js
//   featured true for the large article at the top of /insights (use one)
//   demo     true = labelled "Demonstration" and set to noindex
//   body     array of blocks: 'paragraph' | { h: 'Subheading' } | { list: ['a','b'] }

export const articleCategories = [
  'Architecture',
  'Interior Design',
  'Sustainable Design',
  'Construction',
  'Urban Development',
  'Design Trends',
  'Professional Insights',
];

export const articles = [
  {
    slug: 'how-to-write-an-architectural-brief',
    title: 'How to write an architectural brief that gets the design you want',
    category: 'Professional Insights',
    date: '2026-03-12',
    excerpt: 'A good brief is the most useful thing a client can bring to a first meeting. Here is what to put in it.',
    image: 'articleBrief',
    featured: true,
    demo: true,
    body: [
      'A brief does not need to be long or technical. Its job is to explain what you want the building to do, who will use it and what limits you are working within. The clearer it is, the sooner a design can respond to what actually matters to you.',
      { h: 'Start with how the building will be used' },
      'Describe a typical day. Who is in the building, at what times, doing what? A household that works from home and a household that entertains every weekend need very different plans, even if the floor area is identical.',
      { h: 'Be honest about the budget and the timeline' },
      'A realistic budget range and target dates let an architect propose ideas that can actually be built. If either is uncertain, say so; it is better to discuss the uncertainty early than to discover it after design work is underway.',
      { h: 'Include these items' },
      {
        list: [
          'The site: address, size, any existing buildings and known constraints',
          'Spaces you need, with rough sizes or quantities',
          'Things you love and things you want to avoid, with images if you have them',
          'Who will make decisions, and who must be consulted',
          'Anything fixed in advance, such as a move-in date or a funding deadline',
        ],
      },
      'Finally, treat the brief as a living document. It is meant to be refined in conversation as ideas are tested against the site and the budget.',
    ],
  },
  {
    slug: 'designing-with-daylight',
    title: 'Designing with daylight: where windows go matters more than how many',
    category: 'Architecture',
    date: '2026-02-20',
    excerpt: 'Good daylight is about direction, depth and control, not simply about adding more glass.',
    image: 'articleDaylight',
    featured: false,
    demo: true,
    body: [
      'It is tempting to equate a bright room with a large window. In practice, the quality of daylight depends on which way a window faces, how deep the room is and how the light is controlled once it arrives.',
      { h: 'Think in terms of direction' },
      'Light from different orientations behaves differently through the day and across the seasons. Early design stages are the right time to study how the sun moves across a particular site, because the findings shape the plan itself.',
      { h: 'Bring light in from more than one side' },
      'A room lit from two directions feels more even and less dependent on a single glaring opening. Clerestory windows, roof lights and openings onto courtyards can all help where side windows are limited.',
      { h: 'Control it' },
      'Overhangs, louvres, deep reveals and internal screens let you enjoy daylight without glare or unwanted heat. These devices are far easier to design in from the start than to retrofit.',
    ],
  },
  {
    slug: 'shading-and-natural-ventilation',
    title: 'Shading and natural ventilation: simple ideas that make buildings comfortable',
    category: 'Sustainable Design',
    date: '2026-01-28',
    excerpt: 'Before adding equipment, there are design moves that make a building comfortable by itself.',
    image: 'articleShading',
    featured: false,
    demo: true,
    body: [
      'Comfortable buildings are often the result of a few well-judged decisions made early, rather than technology added later. Shading and natural ventilation are two of the most effective.',
      { h: 'Keep the sun off the walls and glass' },
      'Deep verandas, overhanging roofs and external screens stop direct sun reaching the building envelope. Shade the surface, not just the room.',
      { h: 'Give air a path' },
      'Natural ventilation works when air can enter on one side and leave on another. Plans that allow openings on opposite or adjacent walls, and that keep internal doors or vents free, make this possible.',
      { h: 'Remember that climate and site decide' },
      'The right combination depends on local climate, orientation and surroundings. Treat these ideas as starting points to test, not rules to apply without checking.',
    ],
  },
  {
    slug: 'questions-to-ask-before-you-renovate',
    title: 'Six questions to ask before you renovate',
    category: 'Construction',
    date: '2025-12-15',
    excerpt: 'Renovation rewards early thinking. These questions help you decide what to keep, change or leave alone.',
    image: 'articleRenovate',
    featured: false,
    demo: true,
    body: [
      'Existing buildings come with hidden conditions and real opportunities. A little early thinking can save considerable time and cost later.',
      {
        list: [
          'What do you want to change, and what do you love about the building as it is?',
          'Is the structure sound, and has anyone qualified checked it?',
          'Which approvals or permissions might be needed for the work you have in mind?',
          'What is the realistic budget, including a margin for surprises once walls are opened?',
          'Will you live or work in the building during construction?',
          'Who will coordinate the design team and the builder?',
        ],
      },
      'You do not need every answer before starting a conversation. Even partial answers help an architect propose a sensible first step.',
    ],
  },
  {
    slug: 'active-ground-floors',
    title: 'Why the ground floor matters most to the street',
    category: 'Urban Development',
    date: '2025-11-30',
    excerpt: 'The part of a building people meet at eye level shapes how a street feels, whatever happens above.',
    image: 'articleStreet',
    featured: false,
    demo: true,
    body: [
      'Most people experience a building from the pavement, not from above. What happens at ground level, whether there are doors, windows, shade and places to pause, decides whether a street feels welcoming.',
      { h: 'Doors and windows, not blank walls' },
      'Frequent entrances and visible activity make a street feel safer and more interesting to walk along.',
      { h: 'Shelter and places to stop' },
      'Canopies, colonnades and a little seating make a frontage usable in sun and rain, and encourage people to linger.',
      { h: 'Think about the whole block' },
      'A single good frontage helps; a sequence of them changes the character of a neighbourhood. Early discussions with neighbours and planners can open up these possibilities.',
    ],
  },
  {
    slug: 'open-plan-and-the-return-of-rooms',
    title: 'Open plan, flexible plan: finding the middle ground at home',
    category: 'Design Trends',
    date: '2025-11-05',
    excerpt: 'Many households want shared space and the ability to close a door. Flexible plans can offer both.',
    image: 'articleRooms',
    featured: false,
    demo: true,
    body: [
      'Open-plan living is popular for good reasons: it feels generous and connects people. But homes also need quiet, privacy and the ability to shut away noise or clutter.',
      { h: 'Plan for both' },
      'Sliding or pivoting partitions, deep openings and changes of level let one space behave as two. The same area can host a large gathering or a quiet evening.',
      { h: 'Start with how you live' },
      'The right balance depends on your household. Working from home, young children or frequent guests all change what the plan should do.',
    ],
  },
];

export const getArticle = (slug) => articles.find((a) => a.slug === slug);