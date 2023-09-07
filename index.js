const readline = require('readline');
const calculate = require('./calculate');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptForCalculation() {
  rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
      rl.question('Enter operator (+, -, *, /): ', (operator) => {
        try {
          const result = calculate(parseFloat(num1), parseFloat(num2), operator);
          displayResult(result);
        } catch (error) {
          console.log('\x1b[33m%s\x1b[0m', error.message); // Orange text for error messages
        }
        promptForCalculation();
      });
    });
  });
}

function displayResult(result) {
  if (result > 0) {
    console.log('\x1b[31m%s\x1b[0m', `Result: ${result}`); // Red text for positive results
  } else if (result < 0) {
    console.log('\x1b[32m%s\x1b[0m', `Result: ${result}`); // Green text for negative results
  } else {
    console.log('\x1b[33m%s\x1b[0m', 'Result: 0'); // Orange text for zero result
  }
}

promptForCalculation();

