/*
Date.prototype.getWeekDays = function(d) {

  var wkEnds = 0;
  var days = Math.abs(this.getDaysBetween(d));
  var startDay = 0, endDay = 0;

  if (days) {
    if (d < this) {
      startDay = d.getDay();
      endDay = this.getDay();
    } else {
      startDay = this.getDay();
      endDay = d.getDay();
    }
    wkEnds = Math.floor(days/7);

    if (startDay != 6 && startDay > endDay)
      wkEnds++;

    if (startDay != endDay && (startDay  6 || endDay  6) )
      days-;

    days -= (wkEnds ∗ 2);
  }
  return days;
};

var endDate = new Date(2007, 11, 5); // 5-е декабря 2007
var startDate = new Date(2008, 1, 20); // 20-е февраля 2008
alert(startDate.getWeekDays(endDate));

var d1 = this.getFullYear() ∗ 12 + this.getMonth();
var d2 = d.getFullYear() ∗ 12 + d.getMonth();
return d2 - d1;
*/
/*
Date.prototype.msPERDAY = 1000 ∗ 60 ∗ 60 ∗ 24;

Date.prototype.getDaysBetween = function(d) {
  d = d.copy();

  d.setHours(this.getHours(), this.getMinutes(), this.getSeconds(), ...
    this.getMilliseconds());

  var diff = d.getTime() - this.getTime();
  return (diff)/this.msPERDAY;
};

var today = new Date();
var birthday = new Date(2008, 9, 31);
var days = today.getDaysBetween(birthday);

if (days > 0)
  alert(days + " days 'til my birthday.");
else if (days < 0)
  alert(days + " days since my birthday.");
else
  alert("It's my birthday!!");
*/
