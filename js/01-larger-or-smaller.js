
// Prompt the user for two integers
const firstNumber = parseInt(prompt("Enter the first integer:"));
const secondNumber = parseInt(prompt("Enter the second integer:"));

// Compare the two numbers
let result;
if (firstNumber > secondNumber) {
result = `The larger number is: ${firstNumber}`;
} else if (secondNumber > firstNumber) {
result = `The larger number is: ${secondNumber}`;
} else {
result = "Both numbers are equal.";
}

// Display the result in the browser window
document.write(result);
