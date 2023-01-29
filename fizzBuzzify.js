const fizzBuzz = require("./fizzBuzz");
const readline = require("readline");

// Create readline interface for user input
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Recursive function to repeatedly ask for a number
const askForNumber = () => {
  r1.question(
    "Please enter a number to FizzBuzzify or press q to quit: ",
    (num) => {
      // Parse user input as a number
      const parsedNum = parseFloat(num);
      // If input is "q", close readline interface
      if (num === "q") {
        return r1.close();
      } else if (Number.isNaN(parsedNum)) {
        // If input is not a number, log an error message
        console.log("That was not a valid value!");
      } else {
        // If input is a number, call fizzBuzz function and log the result
        const result = fizzBuzz(parsedNum);
        console.log("Your result is:", result);
      }
      // Call the function again to ask for another number
      askForNumber();
    }
  );
};

askForNumber();
