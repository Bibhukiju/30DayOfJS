//slect the html elements  by its class ->return all elemets of that tag
const header = document.getElementsByTagName("h2");
console.log(header);
//slect the html elements  by its class name
const tester = document.getElementsByClassName("item");
console.log(tester);
//select the html element by id ->returns the first element
const homework = document.getElementById("hello");
console.log(homework);

const treaders = document.querySelector("h2");
//select only one with that name
console.log(treaders);
const breaders = document.querySelectorAll(".item");
//select all the elements with that name
console.log(breaders);
const readers = document.querySelectorAll("#list a");
//only selects the a tag of the parent (ie list)
console.log(readers);

//looping in quryselector
for (items of breaders) {
  console.log(items);
}
for (items of tester) {
  console.log(items);
}
// adding new elements using HTML collections
const collectionItems = document.getElementsByClassName("item");
const list = document.getElementById("list");
const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item 6";
list.appendChild(newItem);

//adding new elemts using query selector
// const collectin=document.querySelectorAll('.item');
// const qlist = document.querySelector("#list");
// const newItema = document.createElement("li");
// newItema.classList.add("item");
// newItema.innerText = "Item 9";
// qlist.appendChild(newItema);
//-------------------------------------------------------
