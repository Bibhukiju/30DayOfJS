//global variables
const request = require("request");

const url =
  "http://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=50ae7385d09461baf5f7c1e541566e1f&units=metric";

request({ url: url, json: true }, (err, response) => {
  const data = response.body;
  if (response.body.error) {
    console.log("Unable to find location");
  } else if (err) {
    console.log(err);
  }
  putLocation(data);
});

//selectors
// const locationdata = document.querySelector(".location");

//functions

timeConversion = (timeStamp) => {
  let dateObj = new Date(timeStamp * 1000);
  let hours = dateObj.getUTCHours() + 5;
  let minutes = dateObj.getUTCMinutes() + 45;
  let rminute = minutes % 60;
  return `${hours + parseInt(minutes / 60)}:${rminute}`;
};

function putLocation(data) {
  console.log(data.name);
}
