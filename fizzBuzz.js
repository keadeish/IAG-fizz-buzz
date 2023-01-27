function fizzBuzz(n) {
  if (typeof n !== "number") {
    return "Please input an integer value.";
  }

  if (n < 1) {
    return "Please input a value greater than 0.";
  }
  const numbersArray = [];
  for (let i = 1; i <= n; i++) {
    numbersArray.push(i);
  }
  const fizzBuzzArray = [];

  for (const number of numbersArray) {
    if (number % 3 === 0 && number % 5 === 0) {
      fizzBuzzArray.push("FizzBuzz");
    } else if (number % 5 === 0) {
      fizzBuzzArray.push("Buzz");
    } else if (number % 3 === 0) {
      fizzBuzzArray.push("Fizz");
    } else {
      fizzBuzzArray.push(number);
    }
  }
  return fizzBuzzArray.join(", ");
}

module.exports = fizzBuzz;
