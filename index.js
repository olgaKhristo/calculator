const readline = require('readline');
const calculate = require('./calculate');
// create a readline interface (rl) that configures how we'll interact with the user. 
//It sets stdin (standard input) to read from the console and 
//stdout (standard output) to write to the console.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//This function will handle the interaction with the user for inputting numbers and an operator.
function promptForCalculation() {
    //We use rl.question to prompt the user for input. The first argument is the prompt message 
    //('Enter first number: '), and the second argument is a callback function that will be executed when the user enters their input.
  rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
      rl.question('Enter operator (+, -, *, /): ', (operator) => {
        try {
            //the calculate function, passing in the user-inputted numbers (num1 and num2)
            // after converting them from strings to floating-point numbers using parseFloat. We also provide the operator.
          const result = calculate(parseFloat(num1), parseFloat(num2), operator);
          displayResult(result);
        } catch (error) {
            //We use console.log to display the error message in orange text (\x1b[33m) to distinguish it from regular output
          console.log('\x1b[33m%s\x1b[0m', error.message); // Orange text for error messages
        }
        //After handling the current calculation, we call promptForCalculation again to prompt the user for another calculation.
        promptForCalculation();
      });
    });
  });
}

function displayResult(result) {
    // function named displayResult to handle how the calculation result is displayed to the user.
  if (result > 0) {
    //If the result is greater than zero, we display the result in red text (\x1b[31m) to indicate it's positive
    console.log('\x1b[31m%s\x1b[0m', `Result: ${result}`); // Red text for positive results
  } else if (result < 0) {
    //
    console.log('\x1b[32m%s\x1b[0m', `Result: ${result}`); // Green text for negative results
  } else {
    //If the result is neither greater nor less than zero, it must be zero
    console.log('\x1b[33m%s\x1b[0m', 'Result: 0'); // Orange text for zero result
  }
}
//Finally, we call promptForCalculation again to continue prompting the user for more calculations in a loop
promptForCalculation();

