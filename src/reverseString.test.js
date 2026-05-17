import { reverseString } from './index.js';

test('reverseString became gnirtSesrever', () => {
  expect(reverseString('reverseString')).toBe('gnirtSesrever');
});

test('REVERSE became ESREVER', () => {
  expect(reverseString('REVERSE')).toBe('ESREVER');
});

test('r became r', () => {
  expect(reverseString('r')).toBe('r');
});

test('Empty string', () => {
  expect(reverseString('')).toBe('');
});
