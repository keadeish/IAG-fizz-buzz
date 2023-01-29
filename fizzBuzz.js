function fizzBuzz(n) {
  // Check if input is a positive integer
  if (typeof n !== "number" || n < 1) {
    return "Please input a positive integer value.";
  }

  let result = "";
  for (let i = 1; i <= n; i++) {
    // Check if i is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      result += "FizzBuzz, ";
    } else if (i % 5 === 0) {
      result += "Buzz, ";
    } else if (i % 3 === 0) {
      result += "Fizz, ";
    } else {
      result += `${i}, `;
    }
  }
  // Trim the end ", "
  return result.slice(0, -2);
}

module.exports = fizzBuzz;
