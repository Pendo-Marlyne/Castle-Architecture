export const projectTypes = [
  'Residential',
  'Commercial',
  'Institutional',
  'Interior',
  'Mixed-use',
  'Renovation or adaptive reuse',
  'Consultancy only',
  'Other',
];

export const contactMethods = ['Email', 'Telephone', 'WhatsApp'];

export const limits = {
  name: 100,
  email: 254,
  phone: 30,
  organisation: 120,
  location: 150,
  budget: 80,
  message: 3000,
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+()\d\s.-]{7,30}$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;

// Returns an object of { field: message }. Empty object = valid.
export function validate(v) {
  const e = {};
  const s = (k) => (typeof v[k] === 'string' ? v[k].trim() : '');

  if (!s('name')) e.name = 'Please enter your full name.';
  else if (s('name').length > limits.name) e.name = `Please keep your name under ${limits.name} characters.`;

  if (!s('email')) e.email = 'Please enter your email address.';
  else if (!EMAIL.test(s('email')) || s('email').length > limits.email)
    e.email = 'Please enter a valid email address, for example name@example.com.';

  const needsPhone = v.contactMethod === 'Telephone' || v.contactMethod === 'WhatsApp';
  if (s('phone') && !PHONE.test(s('phone'))) e.phone = 'Please enter a valid telephone number.';
  else if (needsPhone && !s('phone')) e.phone = 'Please add a telephone number so we can reach you this way.';

  if (s('organisation').length > limits.organisation) e.organisation = 'Please shorten the organisation name.';

  if (!projectTypes.includes(v.projectType)) e.projectType = 'Please choose a type of project.';

  if (!s('location')) e.location = 'Please tell us where the project is located.';
  else if (s('location').length > limits.location) e.location = 'Please shorten the location.';

  if (s('budget').length > limits.budget) e.budget = 'Please shorten the budget description.';

  if (!contactMethods.includes(v.contactMethod)) e.contactMethod = 'Please choose a contact method.';

  if (s('message').length < 20) e.message = 'Please describe your project in at least 20 characters.';
  else if (s('message').length > limits.message)
    e.message = `Please keep your description under ${limits.message} characters.`;

  if (s('consultationDate') && !DATE.test(s('consultationDate')))
    e.consultationDate = 'Please enter a valid date.';

  if (v.consent !== true) e.consent = 'Please confirm you agree to the privacy notice so we can respond.';

  return e;
}