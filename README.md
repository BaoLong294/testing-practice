# Testing Practice

## Introduction

This project is a collection of JavaScript utility functions developed as part of the JavaScript Course on The Odin Project. The primary purpose is to practice Test-Driven Development (TDD) by writing tests before implementing the actual functions using the Jest testing framework.

## Project Goals

- Practice Test-Driven Development (TDD) workflow: write tests first, then implement the code.
- Get comfortable writing unit tests with Jest.
- Implement common utility functions and verify their correctness through automated testing.
- Handle edge cases such as empty inputs, negative numbers, and character wrapping.

## Technologies Used

- JavaScript (ES6+)
- Jest (unit testing framework)
- Babel (@babel/preset-env for ESM/CJS conversion)
- Git & GitHub

## Completed Features

- `capitalize`: Takes a string and returns it with the first character capitalized.
- `reverseString`: Takes a string and returns it reversed.
- `calculator`: An object containing `add`, `subtract`, `multiply`, and `divide` functions, with divide-by-zero protection.
- `caesarCipher`: Takes a string and a shift factor, returns the string with each character shifted, while preserving case and non-alphabetical characters.
- `analyzeArray`: Takes an array of numbers and returns an object containing `average`, `min`, `max`, and `length`.

## Skills Demonstrated

- **Test-Driven Development (TDD)**: Writing failing tests before implementing functions to ensure correctness.
- **Unit Testing with Jest**: Using `test()`, `expect()`, `toBe()`, and `toEqual()` to write clear and meaningful tests.
- **Edge Case Handling**: Testing and handling empty strings, empty arrays, negative numbers, division by zero, and character wrapping.
- **ES6 Modules**: Using `import`/`export` syntax across multiple files.
- **String Manipulation**: Working with `charCodeAt()`, `fromCharCode()`, `charAt()`, `toUpperCase()`, and `slice()`.
- **Version Control**: Using Git with meaningful commit messages throughout the project.

## Lessons Learned

- **Biggest challenge**: Implementing the `caesarCipher` function, particularly handling the wrap-around from `z` back to `a` while also preserving the original letter case.
- **How I solved it**: I used character codes (`charCodeAt` and `fromCharCode`) to handle the shifting logic, with separate branches for uppercase (65-90) and lowercase (97-122) characters, and a wrap-around formula to handle overflow.
- **General lesson**: TDD forces you to think clearly about what a function should do before writing it, which leads to cleaner logic and fewer bugs.

## Contact

- GitHub: [@BaoLong294](https://github.com/BaoLong294)
- Email: longbao2904@gmail.com
- LinkedIn: [Long Bảo](https://www.linkedin.com/in/long-b%E1%BA%A3o-a9226a377/)
