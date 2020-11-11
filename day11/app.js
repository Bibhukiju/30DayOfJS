const getNotes = require("./note");
const chalk = require("chalk");

const command = process.argv[2];
console.log(process.argv);
if (command === "add") {
  console.log("Addding node");
} else if (command === "delete");
{
  console.log("deleting Note");
}
