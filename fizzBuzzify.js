const fizzBuzz = require("./fizzBuzz");
const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Please enter a number to FizzBuzzify: ", (num) => {
  console.log(typeof parseInt(num));
  if (Number.isNaN(num)) {
    console.log("Please enter a valid number.");
  } else {
    const result = fizzBuzz(parseFloat(num));
    console.log(result);
    r1.close();
  }
});
