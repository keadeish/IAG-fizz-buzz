const fizzBuzz = require("./fizzBuzz");

test("Inputting a string give an error message.", () => {
  expect(fizzBuzz("hi")).toBe("Please input an integer value.");
});
