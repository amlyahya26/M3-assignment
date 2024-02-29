const randomNum = Math.random();
let result;

// Determine the result of the coin flip
if (randomNum < 0.5) {
result = "HEAD";
} else {
result = "TAIL";
}

// Display the result
console.log(`You got ${result}`);
const numFlips = parseInt(prompt("How many times to flip?"), 10);

// Validate user input
if (!isNaN(numFlips) && numFlips > 0) {
let headsCount = 0;
let tailsCount = 0;

// Simulate coin flips
for (let i = 0; i < numFlips; i++) {
const flip = Math.random();
if (flip < 0.5) {
headsCount++;
} else {
tailsCount++;
}
}

// Display statistics
console.log(`Total flips: ${numFlips}`);
console.log(`Heads: ${headsCount} (${(headsCount / numFlips) * 100}% success)`);
console.log(`Tails: ${tailsCount} (${(tailsCount / numFlips) * 100}% success)`);
} else {
console.log("Invalid input. Please enter a positive integer.");
}

// Prompt the user to select "Heads" or "Tails"
const userChoice = prompt("Choose 'Heads' or 'Tails':").toLowerCase();
if (randomNum < 0.5) {
result = "Heads";
} else {
result = "Tails";
}

// Compare user's choice with the actual result
if (userChoice === result.toLowerCase()) {
if (result === "Heads") {
alert("The flip was heads and you chose heads...you win!");
} else {
alert("The flip was tails and you chose tails...you win!");
}
} else {
if (result === "Heads") {
alert("The flip was heads but you chose tails...you lose!");
} else {
alert("The flip was tails but you chose heads...you lose!");
}
}

