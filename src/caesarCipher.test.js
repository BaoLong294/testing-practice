import { caesarCipher } from './index.js';

test('x shift 1 became y', () => {
  expect(caesarCipher('x', 1)).toBe('y');
});

test('xyz shift 2 became zab', () => {
  expect(caesarCipher('xyz', 2)).toBe('zab');
});

test('xyz shift 3 became abc', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('HeLLo shift 3 became KhOOr', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Hello, World shift 3 became Khoor, Zruog', () => {
  expect(caesarCipher('Hello, World', 3)).toBe('Khoor, Zruog');
});
