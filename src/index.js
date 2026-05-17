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

export function caesarCipher(string, shift) {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    const code = string.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      let newCode = code + shift;
      if (newCode > 90) {
        newCode = 65 + (newCode - 91);
      }
      newString += String.fromCharCode(newCode);
    } else if (code >= 97 && code <= 122) {
      let newCode = code + shift;
      if (newCode > 122) {
        newCode = 97 + (newCode - 123);
      }
      newString += String.fromCharCode(newCode);
    } else {
      newString += string[i];
    }
  }

  return newString;
}

export function analyzeArray(array) {
  if (array.length == 0) return 'Empty array';

  let min = array[0];
  let max = array[0];
  let sum = array[0];

  for (let i = 1; i < array.length; i++) {
    sum += array[i];
    if (min > array[i]) min = array[i];
    if (max < array[i]) max = array[i];
  }

  return { average: sum / array.length, min, max, length: array.length };
}
