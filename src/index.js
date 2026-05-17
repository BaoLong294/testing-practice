export function capitalize(string) {
  if (!string) return '';

  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  if (!string) return '';

  let reverse = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }

  return reverse;
}

export const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    if (b == 0) return 'Can not divide to zero';
    return a / b;
  },
};
