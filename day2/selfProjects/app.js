//selectors
let data = document.querySelector(".mynumber");
const addData = document.querySelector(".add-data");
const calc = document.querySelector(".mean");
const result = document.querySelector(".result");
const dataList = document.querySelector(".datalist");
const dataTable = document.querySelector(".data-table");
let a = [];
let gMean = 0;

//eventlisteners
addData.addEventListener("click", getData);
calc.addEventListener("click", get_result);

//functions
function getData(e) {
  e.preventDefault();
  a.push(parseInt(data.value));
  a = Array.from(a);
  a = a.sort((c, d) => c - d);
  console.log(typeof a);
  const datum = document.createElement("div");
  datum.classList.add("f-data");
  datum.innerText = data.value;
  dataList.appendChild(datum);
  data.value = "";
}
function get_result() {
  if (a.length > 0) {
    result.innerHTML = "";
    dataTable.innerHTML = "";
    getmean();
    getMedian();
    getSD();
    get_range();
    createTable();
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
  console.log(a);
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
  dataDiv.classList.add("result");
  dataDiv.innerText = `Range of the given data is ${range} `;
  result.appendChild(dataDiv);
}
function createTable() {
  const dataDiv = document.createElement("div");
  const item1 = document.createElement("div");
  item1.innerText = "x";
  item1.classList.add("ist");
  dataDiv.appendChild(item1);
  const item2 = document.createElement("div");
  item2.innerText = "x̄";
  item2.classList.add("ist");
  dataDiv.appendChild(item2);
  dataDiv.classList.add("parenList");
  const item3 = document.createElement("div");
  item3.innerText = "x-mean";
  item3.classList.add("ist");
  dataDiv.appendChild(item3);
  dataDiv.classList.add("parenList");
  dataTable.appendChild(dataDiv);
  for (var i in a) {
    const dataDiv = document.createElement("div");
    const item1 = document.createElement("div");
    item1.innerText = a[i];
    item1.classList.add("ist");
    dataDiv.appendChild(item1);
    const item2 = document.createElement("div");
    item2.innerText = gMean;
    item2.classList.add("ist");
    dataDiv.appendChild(item2);
    const item3 = document.createElement("div");
    item3.innerText = a[i]-gMean;
    item3.classList.add("ist");
    dataDiv.appendChild(item3);
    dataDiv.classList.add("parenList");
    dataTable.appendChild(dataDiv);
  }
  // dataTable.appendChild(ydiv);
  // const item1 = document.createElement("div");
  // item1.innerText = "hello";
  // item1.classList.add("ist");
  // const item2 = document.createElement("div");
  // item1.innerText = "hello";
  // item2.classList.add("ist");
  // const item3 = document.createElement("div");
  // item1.innerText = "hello";
  // item3.classList.add("ist");
  // plist.appendChild(item1);
  // plist.appendChild(item2);
  // plist.appendChild(item3);
}
