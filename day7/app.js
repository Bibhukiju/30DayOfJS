//selectors
const dataSumary = document.querySelector(".data-summary");
const recentransDiv = document.querySelector(".rcntTrans");
const addtrans = document.querySelector(".add-transaction");
const popWindow = document.querySelector(".pop-window");
const closePop = document.querySelector(".close");
const canvas = document.querySelector(".graphcanvas");
const addItem = document.querySelector(".addbuton");
const selectedType = document.querySelector(".type-select");
const descValue = document.querySelector(".desc-input");
const amtValue = document.querySelector(".amt-input");

//eventListeners
addtrans.addEventListener("click", addtransaction);
closePop.addEventListener("click", closePopwindow);
addItem.addEventListener("click", addItems);

//global variables;
let totalInc = 0;
let totalExp = 0;
let allTransList = [
  //   { type: "Income", desc: "Description", amount: 10 },
  //   { type: "Income", desc: "homies", amount: 10 },
  //   { type: "Income", desc: "homies", amount: 10 },
  //   { type: "Income", desc: "homies", amount: 10 },
  //   { type: "Income", desc: "homies", amount: 10 },
  //   { type: "Expenses", desc: "my  expense", amount: 80 },
  //   { type: "Income", desc: "last4", amount: 10 },
  //   { type: "Income", desc: "test", amount: 10 },
  //   { type: "Expenses", desc: "my 2nd expense", amount: 80 },
];

//class
class Transaction {
  constructor(type, desc, amount) {
    this.type = type;
    this.desc = desc;
    this.amount = amount;
  }
}

//functions
function createdataSummary() {
  let totalinc = 0;
  let totalexp = 0;
  allTransList.forEach((element) => {
    if (element.type == "Income") {
      totalinc += element.amount;
      totalInc = totalinc;
    } else {
      totalexp += element.amount;
      totalExp = totalexp;
    }
  });

  //total div
  const totalDiv = document.createElement("div");
  totalDiv.style.backgroundColor = "#EBEBEB";
  const totaltitle = document.createElement("div");
  totaltitle.innerText = "Total Transaction";
  totaltitle.classList.add("sumDivP");
  totalDiv.appendChild(totaltitle);
  const totalAmount = document.createElement("div");
  totalAmount.innerText = totalinc + totalexp;
  totalAmount.classList.add("sumDivP");
  totalDiv.appendChild(totalAmount);
  totalDiv.classList.add("summaryDiv");
  dataSumary.appendChild(totalDiv);

  //income div
  const incomeDiv = document.createElement("div");
  incomeDiv.style.backgroundColor = "#008080";
  const inctitle = document.createElement("div");
  inctitle.classList.add("sumDivP");
  inctitle.innerText = "Total Income";
  incomeDiv.style.color = "white";
  incomeDiv.appendChild(inctitle);
  const incamount = document.createElement("div");
  incamount.classList.add("sumDivP");
  incamount.innerText = Math.round(totalinc);
  incomeDiv.style.color = "white";
  incomeDiv.appendChild(incamount);
  incomeDiv.classList.add("summaryDiv");
  dataSumary.appendChild(incomeDiv);

  //exp div
  const expDiv = document.createElement("div");
  expDiv.style.backgroundColor = "#F95F5F";
  expDiv.style.color = "white";
  const expTitle = document.createElement("div");
  expTitle.classList.add("sumDivP");
  expTitle.innerText = "Total Expenses";
  expDiv.appendChild(expTitle);
  const expAmount = document.createElement("div");
  expAmount.classList.add("sumDivP");
  expAmount.innerText = totalexp;
  expDiv.appendChild(expAmount);
  expDiv.classList.add("summaryDiv");
  dataSumary.appendChild(expDiv);
  return {
    total_inc: totalinc,
    total_exp: totalexp,
  };
}
function recentransactionBlocks() {
  for (
    let element = allTransList.length - 1;
    element > allTransList.length - 7;
    element--
  ) {
    const listTile = document.createElement("div");
    if (allTransList[element].type != "Income") {
      listTile.style.color = "red";
    }
    listTile.classList.add("trnList");
    recentransDiv.appendChild(listTile);
    const typeDiv = document.createElement("div");
    typeDiv.style.width = "30%";
    typeDiv.innerText = allTransList[element].type;
    listTile.appendChild(typeDiv);

    const descDiv = document.createElement("div");
    descDiv.style.width = "30%";
    descDiv.innerText = allTransList[element].desc;
    listTile.appendChild(descDiv);

    const amtDiv = document.createElement("div");
    amtDiv.style.width = "30%";
    amtDiv.innerText = allTransList[element].amount;
    listTile.appendChild(amtDiv);
  }
}
function addtransaction() {
  popWindow.style.display = "flex";
}
function closePopwindow() {
  popWindow.style.display = "none";
}

function addItems() {
  const alltrans = [];
  localStorageData = localStorage.getItem("Transactions");
  const newaddedItem = new Transaction(
    selectedType.value,
    descValue.value,
    amtValue.value
  );
  if (localStorageData) {
    localStorageData = JSON.parse(localStorageData);
    alltrans.push(localStorageData);
    console.log(alltrans);
    alltrans.push(newaddedItem);
    console.log(alltrans);
    localStorage.setItem("Transactions", JSON.stringify(alltrans));
  } else {
    alltrans.push(newaddedItem);
    console.log(alltrans);
    localStorage.setItem("Transactions", JSON.stringify(alltrans));
  }
}

function drawGraph() {
  const ctx = canvas.getContext("2d");
  canvas.height = 400;
  canvas.width = 350;
  ctx.beginPath();
  ctx.moveTo(20, 20);
  ctx.lineTo(20, 400);
  ctx.lineTo(390, 400);
  ctx.stroke();
  let yIncr = totalInc > totalExp ? totalInc / 350 : totalExp / 350;
  console.log(yIncr);
}
createdataSummary();
recentransactionBlocks();
