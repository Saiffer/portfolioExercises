var yearsEntered = prompt("Please enter your age");

var leapYears = yearsEntered / 4;
var leapYearsDays = leapYears * 364;
var simpleYearDays = yearsEntered - leapYears;
var simpleYearDaysLived = simpleYearDays * 365;

alert("You've lived " + simpleYearDaysLived + leapYearsDays + " days");
console.log("You've lived " + simpleYearDaysLived + leapYearsDays+ " days");