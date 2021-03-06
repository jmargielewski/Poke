import {
  isRequire,
  validateEmail,
  matchesPassword,
  isNumber,
} from '../../utils/validation/validation';

export const loginFormFields = [
  {
    name: 'email',
    label: 'Email',
    type: 'text',
    validation: [isRequire, validateEmail],
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    validation: [isRequire],
  },
];

export const registerFormFields = [
  {
    name: 'name',
    label: 'Name',
    validation: [isRequire],
  },
  {
    name: 'surname',
    label: 'Surname',
    validation: [isRequire],
  },
  {
    name: 'telephone',
    label: 'Telephone(optional)',
    validation: [isNumber],
  },
  {
    name: 'email',
    label: 'Email',
    validation: [isRequire, validateEmail],
  },
  {
    name: 'password',
    label: 'Password',
    validation: [isRequire],
  },
  {
    name: 'confirmPassword',
    label: 'Repeat password',
    validation: [isRequire, matchesPassword],
  },
];
