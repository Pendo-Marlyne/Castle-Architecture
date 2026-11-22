// EDIT THIS FILE with real business details. Leave a value as null until confirmed.
export const site = {
  name: 'Castle Architectural Firm',
  shortName: 'Castle',
  tagline: 'Architecture that shapes how we live, work and experience space.',
  description:
    'Castle is a design-led architectural practice creating thoughtful, functional and enduring spaces.',
  url: 'https://www.example.com', // TODO: replace with the real production domain

  contact: {
    email: null,     // e.g. 'hello@yourdomain.com'
    phone: null,     // e.g. '+254 700 000 000'
    whatsapp: null,  // digits only, with country code, e.g. '254700000000'
    address: null,   // e.g. 'Street, Town, Country'
    hours: null,     // e.g. 'Mon–Fri, 8:00–17:00'
  },

  // Add a URL to show an icon in the footer; null entries are hidden.
  social: {
    instagram: null,
    linkedin: null,
    facebook: null,
  },
};

export const placeholder = (value, label) => value || `${label} to be confirmed`;