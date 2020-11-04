//selectors
let data = document.querySelector(".mynumber");
const addData = document.querySelector(".add-data");
const calc = document.querySelector(".mean");
const result = document.querySelector(".result");
const dataList = document.querySelector(".datalist");
const dataTable = document.querySelector(".data-table");
const canvas = document.querySelector(".canva");

//global vriable
let a = [];
let unsorta = [];
let gMean = 0;

//eventlisteners
addData.addEventListener("click", getData);
calc.addEventListener("click", get_result);

//functions
function getData(e) {
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
    drawPoints();
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
    dataDiv.innerText = `Mean of the given data is ${mean.toPrecision(3)}`;
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
  // plotxy();
}
function blocks(count) {
  return count * 10;
}

function drawAxis() {
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(blocks(2), blocks(2));
  ctx.lineTo(blocks(2), blocks(49));
  ctx.lineTo(blocks(90), blocks(49));
  ctx.stroke();
}

// function drawLine() {
//   ctx.beginPath();
//   ctx.strokeStyle = "black";
//   ctx.moveTo(blocks(5), blocks(40));
//   let xPlot = 10;
//   for (let i in unsorta) {
//     ctx.strokeStyle = "black";
//     ctx.lineTo(blocks(xPlot), blocks(40) - blocks(unsorta[i] / 2));
//     ctx.font = "20px Verdana";
//     ctx.strokeText(
//       unsorta[i],
//       blocks(xPlot),
//       blocks(40) - blocks(unsorta[i] / 2)
//     );
//     xPlot += 10;
//   }
//   ctx.stroke();
//   drawMean_Line();
// }

function drawMean_Line() {
  ctx.beginPath();
  ctx.moveTo(0, blocks(40) - blocks(gMean / 2));
  console.log(blocks(40) - blocks(gMean / 2));
  ctx.lineTo(canvas.width, blocks(40) - blocks(gMean / 2));
  ctx.strokeStyle = "green";
  ctx.stroke();
}
// function plotXY() {
//   ctx.beginPath();
//   let yMaxLimit = 40;
//   let yOrign = 490;
//   let yIncr = yMaxLimit - yOrign / Math.max(...a);
//   console.log(Math.max(...a));
//   console.log(yIncr);
//   let xMaxLimit = blocks(96);
//   let xOrigin = 20;
//   let xIncr = (xMaxLimit - xOrigin) / a.length;
//   ctx.moveTo(xOrigin, yOrign);
//   for (let i in unsorta) {
//     xOrigin += xIncr;
//     ctx.lineTo(xOrigin, yOrign - i * yIncr);
//     console.log(`${xOrigin}    ${yOrign - i * yIncr}`);
//     ctx.stroke();
//   }
//   ctx.stroke();
// }

canvas.width = 1000;
canvas.height = 500;

// global variables
let xOrigin = 20;
let yOrigin = 490;

let yAxisLimit = 20;
let xAxisLimit = 980;

let yAxisDisplayLimit = yAxisLimit + 10;
let xAxisDisplayLimit = xAxisLimit - 30;

let xIncr, yIncr;

arr = unsorta;

var c = canvas.getContext("2d");

c.beginPath();
// drawing the y-axis points
c.moveTo(xOrigin, yOrigin);
c.lineTo(xOrigin, yAxisLimit);

// drawing the x-axis points
c.moveTo(xOrigin, yOrigin);
c.lineTo(xAxisLimit, yOrigin);

c.stroke();

function drawNumbersOnAxis() {
  // c.font("3px Arial");
  // ctx.fillText("ram",xDraw+8,yDraw);
  let xDraw = xOrigin,
    yDraw = yOrigin;
  yIncr = (yOrigin - yAxisDisplayLimit) / Math.max(...arr);
  while (yDraw >= yAxisDisplayLimit) {
    c.beginPath();
    c.moveTo(xDraw, yDraw);
    c.lineTo(xDraw + 5, yDraw);

    c.stroke();
    yDraw = yDraw - yIncr;
  }
}

function drawPoints() {
  yIncr = (yOrigin - yAxisDisplayLimit) / Math.max(...arr);
  xIncr = (xAxisDisplayLimit - xOrigin) / arr.length;

  c.beginPath();
  c.moveTo(xOrigin, yOrigin);

  //c.font("20px Arial");

  let xPlot = xOrigin,
    yPlot;
  for (let value of arr) {
    xPlot += xIncr;
    yPlot = yOrigin - value * yIncr;
    console.log(`xPlot: ${xPlot} yPlot: ${yPlot}`);
    c.lineTo(xPlot, yPlot);
    c.font = "30px Comic Sans MS";
    c.strokeText(value, xPlot - 10, yPlot);
    c.strokeStyle="green";
    c.stroke(); //c.fillText(xPlot+10,yPlot,value);
  }
}

//drawNumbersOnAxis();
