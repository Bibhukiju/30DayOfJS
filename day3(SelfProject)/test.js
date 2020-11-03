var today = new Date();
today = today.getSeconds();
while (1) {
  var oday = new Date();
  oday = oday.getSeconds();
  if (oday == today) {
    console.log(oday);
    today++;
  }
  else if(oday==59)
  {
    today=0;
    oday=0;
  }
}



