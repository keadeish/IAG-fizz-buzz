const fizzBuzz = require("./fizzBuzz");

test("Inputting a string gives an error message.", () => {
  expect(fizzBuzz("hi")).toBe("Please input an integer value.");
});

test("Inputting a negative number gives an error message.", () => {
  expect(fizzBuzz(-4)).toBe("Please input a value greater than 0.");
});
