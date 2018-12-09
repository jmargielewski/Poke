export const isRequire = value => (
  value ? undefined : 'Require field'
);

// !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
export const validateEmail = value => (
  value.includes('@') ? undefined : 'Email is invalid'
);
