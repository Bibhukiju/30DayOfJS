//selectors
const dataSumary = document.querySelector(".data-summary");
const recentransDiv = document.querySelector(".rcntTrans");
const addtrans = document.querySelector(".add-transaction");
const popWindow = document.querySelector(".pop-window");
const closePop = document.querySelector(".close");

//eventListeners
addtrans.addEventListener("click", addtransaction);
closePop.addEventListener("click",closePopwindow)

//class
class Transaction {
  constructor(type, desc, amount) {
    this.type = type;
    this.desc - desc;
    this.amount = amount;
  }
}
//global varaiable
allTransList = [
  { type: "Income", desc: "Description", amount: 10 },
  { type: "Income", desc: "homies", amount: 10 },
  { type: "Income", desc: "homies", amount: 10 },
  { type: "Income", desc: "homies", amount: 10 },
  { type: "Income", desc: "homies", amount: 10 },
  { type: "Income", desc: "last4", amount: 10 },
  { type: "Income", desc: "test", amount: 10 },
];

//functions
function createdataSummary() {
  const arr = [1, 2, 3, 4, 5];
  const earr = [1, 5, 6, 8];
  let totalinc = 0;
  let totalexp = 0;
  arr.forEach((element) => {
    totalinc += parseInt(element);
  });
  earr.forEach((element) => {
    totalexp += parseInt(element);
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
}
function recentransactionBlocks() {
  for (
    let element = allTransList.length - 1;
    element > allTransList.length - 7;
    element--
  ) {
    console.log(allTransList[element]);
    const listTile = document.createElement("div");
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
  console.log("hello");
  popWindow.style.display = "flex";
}
function closePopwindow()
{
  console.log("close it")
  popWindow.style.display = "none";
}

createdataSummary();
recentransactionBlocks();
