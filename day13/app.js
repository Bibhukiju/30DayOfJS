const request = require("request");

const url =
  "http://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=50ae7385d09461baf5f7c1e541566e1f";

request({ url: url }, (err, response) => {
  const data = JSON.parse(response.body);
  console.log(
    `Today sunrise is at ${timeConversion(
      data.sys.sunrise
    )} and Sun set is at ${timeConversion(data.sys.sunset)}`
  );
});

timeConversion = (timeStamp) => {
  let dateObj = new Date(timeStamp * 1000);
  let hours = dateObj.getUTCHours() + 5;
  let minutes = dateObj.getUTCMinutes() + 45;
  let rminute = minutes % 60;
  return `${hours + parseInt(minutes / 60)}:${rminute}`;
};
