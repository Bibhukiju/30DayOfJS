const button = document.querySelector("#submit");
const tlist = document.querySelector("#list");
const items = tlist.children;
const itmNumber = document.querySelector(".item-nbr");

button.addEventListener("click", function () {
  itmNumber.innerText = items.length + 1;
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  var test = prompt("Enter your data");
  newItem.innerText = test;
  tlist.appendChild(newItem);
  var ttitle = document.querySelector(".ttitle");
  for (item of items) {
    item.addEventListener("click", deleteme);
  }
  ttitle.style.color == "red"
    ? (ttitle.style.color = "green")
    : (ttitle.style.color = "red");
});

function deleteme(e) {
  e.stopPropagation();//it will stop any other clickevent of body
  e.target.remove();
}
