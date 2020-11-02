//selectors
let data = document.querySelector(".mynumber");
const addData = document.querySelector(".add-data");
const calc = document.querySelector(".mean");
const result = document.querySelector(".result");
const dataList = document.querySelector(".datalist");
let a = [];
let gMean = 0;

//eventlisteners
addData.addEventListener("click", getData);
calc.addEventListener("click", get_result);

//functions
function getData(e) {
  e.preventDefault();
  a.push(parseInt(data.value));
  console.log(a);
  const datum = document.createElement("div");
  datum.classList.add("f-data");
  datum.innerText = data.value;
  dataList.appendChild(datum);
  data.value = "";
}
function get_result() {
  if (a.length > 0) {
    result.innerHTML = '';
    getmean();
    getMedian();
    getSD();
    get_range();
  } else {
    getmean();
  }
}
function getmean() {
  let total = 0,
    mean;
  a.forEach((element) => {
    total += element;
  });
  mean = total / a.length;
  gMean = mean;
  const dataDiv = document.createElement("Div");
  dataDiv.classList.add("result");
  if (a.length > 0) {
    dataDiv.innerText = `Mean of the given data is ${mean}`;
  } else {
    alert("enter atleast one data");
  }
  result.appendChild(dataDiv);
}
function getMedian() {
  a = a.sort();
  console.log(a);
  let n = a.length / 2 - 1;
  n = Math.round(n);
  n = a[n];
  const dataDiv = document.createElement("Div");
  dataDiv.classList.add("result");
  if (a.length > 0) {
    dataDiv.innerText = `Median of the given data is ${n}`;
  } else {
    dataDiv.classList.add("error");
    dataDiv.innerText = `Enter atleast 1 data and try again`;
  }
  result.appendChild(dataDiv);
}
function getSD() {
  let x_mean = [];
  x_mean_total = 0;
  for (var x in a) {
    var y = a[x] - gMean;
    y = Math.pow(y, 2);
    x_mean.push(y);
  }
  x_mean.forEach((element) => {
    x_mean_total += element;
  });
  x_mean_total /= x_mean.length - 1;
  console.log(x_mean_total);
  x_mean_total = Math.sqrt(x_mean_total);
  const dataDiv = document.createElement("Div");
  dataDiv.classList.add("result");
  if (a.length > 0) {
    dataDiv.innerText = `standard Deviation of the given data is ${x_mean_total}`;
  } else {
    dataDiv.classList.add("error");
    dataDiv.innerText = `Enter atleast 1 data and try again`;
  }
  result.appendChild(dataDiv);
}
function get_range() {
  let max = Math.max(...a);
  let min = Math.min(...a);
  const range = max - min;
  const dataDiv = document.createElement("div");
  dataDiv.innerText = `Range of the given data is ${range} `;
  result.appendChild(dataDiv);  
}
