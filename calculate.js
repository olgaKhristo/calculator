// const calculate = () =>{
//     const prompt = require('prompt-sync')();
    

// }
// calculate();



function calculate(num1, num2, operator) {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 === 0) {
          throw new Error("Division by zero is not allowed");
        }
        return num1 / num2;
      default:
        throw new Error("Invalid operator. Please use one of: +, -, *, /");
    }
  }
  
  module.exports = calculate;
  