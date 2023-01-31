var currentDateTime = new Date();

var year = currentDateTime.getFullYear();

var month = (currentDateTime.getMonth() + 1);

var date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;

var reservationDate = document.querySelector("#reservation-date");

var reservationTime = document.querySelector("#reservation-time");

reservationDate.setAttribute("min", dateTomorrow);

reservationTime.onchange = function () {
    checkoutElem.setAttribute("min", this.value);
    if(this.value.min < 15) {
      min = 0;
    }
}