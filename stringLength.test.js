const stringLength = require('./stringLength');

test('takes a string and returns its characters count', () => {
  expect(stringLength("Kibrewosse")).toBe(10);
});

test('check character less than 1', () => {
  expect(()=>stringLength("")).toThrow("The character length must between one and ten");
});

test('check character greater than 10', () => {
  expect(()=>stringLength("Kibrewossen")).toThrow("The character length must between one and ten");
});
