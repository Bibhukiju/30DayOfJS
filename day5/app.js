//selectors
const dataSumary = document.querySelector(".data-summary");
const lowerSumPart = document.querySelector(".lower-summary");

//eventListeners

//class
class Transaction {
  constructor(type, desc, amount) {
    this.type = type;
    this.desc - desc;
    this.amount = amount;
  }
}
//global varaiable

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
  totalDiv.innerHTML = "<p class='sumDivP'>Total Transaction</p>";
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

  //lowerPart of dashboard
  const recntTransDiv = document.createElement("div");
  recntTransDiv;
}

createdataSummary();
