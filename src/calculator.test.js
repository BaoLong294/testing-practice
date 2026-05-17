import { calculator } from './index.js';

test('Adds 20 + 9 to equal 29', () => {
  expect(calculator.add(20, 9)).toBe(29);
});

test('Adds -20 + 9 to equal -11', () => {
  expect(calculator.add(-20, 9)).toBe(-11);
});

test('Subtracts 20 - 9 to equal 11', () => {
  expect(calculator.subtract(20, 9)).toBe(11);
});

test('Subtracts -20 - 9 to equal -29', () => {
  expect(calculator.subtract(-20, 9)).toBe(-29);
});

test('Multiplys 0 * 29 to equal 0', () => {
  expect(calculator.multiply(0, 29)).toBe(0);
});

test('Multiplys 12 * 4 to equal 28', () => {
  expect(calculator.multiply(12, 4)).toBe(48);
});

test('Multiplys -12 * 4 to equal -28', () => {
  expect(calculator.multiply(-12, 4)).toBe(-48);
});

test('Divides 0 / 29 to equal 0', () => {
  expect(calculator.divide(0, 29)).toBe(0);
});

test('Divides 9 / 3 to equal 3', () => {
  expect(calculator.divide(9, 3)).toBe(3);
});

test('Divides 9 / 2 to equal 4.5', () => {
  expect(calculator.divide(9, 2)).toBe(4.5);
});

test('Can not divide to zero', () => {
  expect(calculator.divide(9, 0)).toBe('Can not divide to zero');
});
