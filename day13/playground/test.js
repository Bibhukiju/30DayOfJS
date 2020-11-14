console.log("starting");

//this function is called after 2000 miliseconds
setTimeout(() => {
  console.log("0.2 sec passed");
}, 200);

setTimeout(() => {
  console.log("mango");
}, 100);

console.log("ending");
