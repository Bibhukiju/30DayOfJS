//selectors
let data = document.querySelector(".mynumber");
const addData = document.querySelector(".add-data");
const calc = document.querySelector(".mean");
const result = document.querySelector(".result");
const dataList = document.querySelector(".datalist");
const dataTable = document.querySelector(".data-table");
let canvas = document.querySelector(".canva");
let a = [];
let unsorta = [];
let gMean = 0;

//eventlisteners
addData.addEventListener("click", getData);
calc.addEventListener("click", get_result);

//functions
function getData(e) {
  const arr = [1, 2, 4, 10, 3, 7, 9, 8];
  console.log(typeof arr);
  arr.sort();
  console.log(arr);
  e.preventDefault();
  a.push(parseInt(data.value));
  unsorta.push(parseInt(data.value));
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
    dataList.innerHTML = "";
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
  draw_canvas();
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
  dataDiv.innerText = `Median of the given data is ${n}`;
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
  dataDiv.innerText = `Standard Deviation of the given data is ${x_mean_total.toPrecision(
    3
  )}`;
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
  item3.innerText = "x-x̄";
  item3.classList.add("ist");
  dataDiv.appendChild(item3);
  dataDiv.classList.add("parenList");
  dataTable.appendChild(dataDiv);
  const item4 = document.createElement("div");
  item4.innerText = "(x-x̄)^2";
  item4.classList.add("ist");
  dataDiv.appendChild(item4);
  dataDiv.classList.add("parenList");
  for (var i in a) {
    const dataDiv = document.createElement("div");
    const item1 = document.createElement("div");
    item1.innerText = a[i];
    item1.classList.add("ist");
    dataDiv.appendChild(item1);
    const item2 = document.createElement("div");
    item2.innerText = gMean.toPrecision(3);
    item2.classList.add("ist");
    dataDiv.appendChild(item2);
    const item3 = document.createElement("div");
    item3.innerText = (a[i] - gMean).toPrecision(3);
    item3.classList.add("ist");
    dataDiv.appendChild(item3);
    const item4 = document.createElement("div");
    item4.innerText = Math.pow(a[i] - gMean, 2).toPrecision(3);
    item4.classList.add("ist");
    dataDiv.appendChild(item4);
    dataDiv.classList.add("parenList");
    dataTable.appendChild(dataDiv);
  }
  const ataDiv = document.createElement("div");
  const item01 = document.createElement("div");
  item01.innerText = `N=${a.length}`;
  item01.classList.add("ist");
  ataDiv.appendChild(item01);
  const item02 = document.createElement("div");
  item02.innerText = `x̄=${gMean.toPrecision(3)}`;
  item02.classList.add("ist");
  ataDiv.appendChild(item02);
  const item03 = document.createElement("div");
  item03.innerText = `x-x̄=0`;
  item03.classList.add("ist");
  ataDiv.appendChild(item03);
  const item04 = document.createElement("div");
  item04.innerText = Math.pow(a[i] - gMean, 2).toPrecision(3);
  item04.classList.add("ist");
  ataDiv.appendChild(item04);
  ataDiv.classList.add("parenList");
  dataTable.appendChild(ataDiv);
}

//day 3 for graph
let ctx = canvas.getContext("2d");
function draw_canvas() {
  canvas.width = 1000;
  canvas.height = 500;
  drawAxis();
  drawLine();
}
function blocks(count) {
  return count * 10;
}

function drawAxis() {
  let yPlot = 40;
  let data = 0;
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(blocks(5), blocks(5));
  ctx.lineTo(blocks(5), blocks(40));
  ctx.lineTo(blocks(80), blocks(40));
  ctx.moveTo(blocks(5), blocks(40));
  for (i = 0; i <= 10; i++) {
    ctx.strokeText(data, blocks(2), blocks(yPlot));
    yPlot -= 5;
    gMean = Math.ceil(gMean);
    data += gMean;
  }
  ctx.stroke();
}

function drawLine() {
  ctx.beginPath();
  ctx.moveTo(blocks(5), blocks(40));
  let xPlot = 10;
  for(let i in unsorta ){
    let popninBlks = unsorta[i] / gMean;
    ctx.lineTo(blocks(xPlot), blocks(40) - popninBlks);
    xPlot += 5;
  };
  ctx.stroke();
}
