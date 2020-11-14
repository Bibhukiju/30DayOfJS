setTimeout(() => {
  console.log("hello");
}, 2000);

const names = ["andrew", "bibhu", "mango"];
const shortnames = names.filter((name) => {
  return name.length <= 5;
});
console.log(shortnames);
