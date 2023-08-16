#!/usr/bin/node
// To Check the number of arguments passed to the script
const numArguments = process.argv.length - 2; // Subtract 2 to exclude "node" and the script filename

// Logic to print the appropriate message
if (numArguments === 0) {
  console.log("No argument");
} else if (numArguments === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}

