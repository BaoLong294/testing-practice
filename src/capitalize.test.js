import { capitalize } from "./index.js";

test("Capitalize became Capitalize", () => {
  expect(capitalize("Capitalize")).toBe("Capitalize");
});

test("capitalize became Capitalize", () => {
  expect(capitalize("capitalize")).toBe("Capitalize");
});

test("CAPITALIZE became Capitalize", () => {
  expect(capitalize("CAPITALIZE")).toBe("CAPITALIZE");
});

test("Empty string", () => {
  expect(capitalize("")).toBe("");
});