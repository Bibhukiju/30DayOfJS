//Local storage
localStorage.setItem("todo", "feed the cat");
localStorage.setItem("user", "Bibhu");
localStorage.setItem("todo", "feed the dog");

//geting stuff back
const user = localStorage.getItem("user");
localStorage.clear();
const todos = ["wake up", "eat breakfast", "eat meal", "code"];
localStorage.setItem("todos", JSON.stringify(todos));

a = localStorage.getItem("todos");
console.log(typeof a);
a=JSON.parse(a);
console.log(typeof a);

//session storage
sessionStorage.setItem("todo", "feed my cat");
