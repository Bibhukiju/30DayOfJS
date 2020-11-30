//selector
const deathDiv = document.querySelector(".death");
const testedPositiveDiv = document.querySelector(".positive");
const recoveredDiv = document.querySelector(".recovered");
const updatedDiv = document.querySelector(".updatedat");
//eventListeners
document.addEventListener("DOMContentLoaded", getData);

//functions
function getData() {
  fetch("https://nepalcorona.info/api/v1/data/nepal")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      deathDiv.innerHTML = `<h3 class="data">${data.deaths}</h3>`;
      testedPositiveDiv.innerHTML = `<h3 class="data">${data.tested_positive}</h3>`;
      recoveredDiv.innerHTML = `<h3 class="data">${data.recovered}</h3>`;
      let updatedTime = data.latest_sit_report.updated_at;
      console.log(typeof updatedTime);
      updatedTime = updatedTime.split("T")[0];
      updatedDiv.innerHTML = `<h2>${updatedTime}</h2>`;
    });
}
