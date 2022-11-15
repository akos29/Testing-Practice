const reverseString = require('./reverseString');

test('takes a string and returns the reverse characters', () => {
  expect(reverseString("kbson")).toBe("nosbk");
});
