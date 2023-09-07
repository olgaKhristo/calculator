# Scripts & libraries

## Organisation

### Duration

This task is designed to take around **1** hour.

### Team

For this task, work with another member of your cohort.

## Learning objectives

- **Use** Javascript to write straightforward programs
- **Run** Javascript programs from the command line
- **Import** and use functions from external libraries
- **Find** and use documentation to apply concepts to new tools

## Brief

- Create a `calculate.js` file that exports a single function, `calculate()`;
- `calculate()` should accept three arguments: two numbers and a string.
- If the string is one of the following signs -  "+", "-", "/", "*" - the function should return the result of the relevant mathematical operator on the two numbers.

Examples:

- `calculate(1, 2, "+")` -> `3`
- `calculate(2, 4, "-")` -> `-2` 

- Create an `index.js` file that imports the `calculate()` function.
- When run, this file should prompt the user to enter numbers and a sign
- The program should then output the result.
    - If the result is greater than 0, it should be output in red text.
    - If the result is below zero, it should be output in green text.
    - Any error messages or zero itself should be output in orange text.
-  After displaying the result, the program should prompt the user again for another calculation
- The program should be runnable using an NPM script.

## Resources

- [Getting user input in Node - Codecademy](https://www.codecademy.com/article/getting-user-input-in-node-js)
- [ansi-colors - NPM package](https://www.npmjs.com/package/ansi-colors)
- [prompt-sync - NPM package](https://github.com/heapwolf/prompt-sync)