import { analyzeArray } from './index.js';

test('1st analyze array test case', () => {
  expect(analyzeArray([])).toBe('Empty array');
});

test('2nd analyze array test case', () => {
  expect(analyzeArray([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});

test('3rd analyze array test case', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('4th analyze array test case', () => {
  expect(analyzeArray([5, 10, -8, 50, 3])).toEqual({
    average: 12,
    min: -8,
    max: 50,
    length: 5,
  });
});

test('5th analyze array test case', () => {
  expect(analyzeArray([-1, -8, -3, -4])).toEqual({
    average: -4,
    min: -8,
    max: -1,
    length: 4,
  });
});
