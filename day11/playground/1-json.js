//global variables
const fs = require("fs");
const dataBuffer = fs.readFileSync("1-json.json");
const data = dataBuffer.toString();
let dataObject = JSON.parse(data);
//functions
console.log(dataObject);

dataObject.name = "Bibhu";
dataObject.planet = "mars";
dataObject.age = 20;
console.log(dataObject);

const sent_data = JSON.stringify(dataObject);

fs.writeFileSync("1-json.json", sent_data);
