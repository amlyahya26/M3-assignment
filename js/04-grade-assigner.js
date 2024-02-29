function main() {
const user_input = parseInt(prompt("Please enter a number between 1 and 100:"));

if (isNaN(user_input) || user_input < 1 || user_input > 100) {
console.log("Only numbers between 1 and 100 are accepted.");
return;
}

if (user_input >= 60 && user_input < 70) {
console.log("You received a D");
} else if (user_input >= 70 && user_input < 80) {
console.log("You received a C");
} else if (user_input >= 80 && user_input < 90) {
console.log("You received a B");
} else if (user_input >= 90 && user_input <= 100) {
console.log("You received an A");
} else {
console.log("You received an F");
}
}
main();
