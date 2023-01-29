const fizzBuzz = require("./fizzBuzz");

test("Inputting a string gives an error message.", () => {
  expect(fizzBuzz("hi")).toEqual("Please input a positive integer value.");
});

test("Inputting a negative number gives an error message.", () => {
  expect(fizzBuzz(-4)).toEqual("Please input a positive integer value.");
});

test("Inputting a valid number returns a fizzbuzzified string.", () => {
  expect(fizzBuzz(4)).toEqual("1, 2, Fizz, 4");
});

test("Input a number 15 or greater returns Fizz Buzz and FizzBuzz at the correct places", () => {
  expect(fizzBuzz(16)).toEqual(
    "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16"
  );
});
