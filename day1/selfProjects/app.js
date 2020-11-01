//selectors
let data = document.querySelector(".mynumber");
const addData = document.querySelector(".add-data");
const calc = document.querySelector(".mean");
const result = document.querySelector(".result");
let a = [];

//eventlisteners
addData.addEventListener("click", getData);
calc.addEventListener("click", getmean);

//functions
function getData(e) {
  e.preventDefault();
  a.push(parseInt(data.value));
  console.log(a);
  data.value = "";
}
