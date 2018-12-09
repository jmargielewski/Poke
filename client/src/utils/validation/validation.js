import { EMAIL_REGEXP, PHONE_REGEXP } from '../../constants/validation';

const isRequire = value => (
  value ? undefined : 'Require field'
);

const validateEmail = value => (
  (!EMAIL_REGEXP.test(value.trim()) ? 'Email is invalid' : undefined)
);

const matchesPassword = (value, bothValues) => (
  value === bothValues.password ? undefined : 'Passwords doesn\'t match'
);

const isNumber = value => (
  (!PHONE_REGEXP.test(value) ? 'Phone number is invalid' : undefined)
);

export {
  isRequire,
  validateEmail,
  matchesPassword,
  isNumber,
};
