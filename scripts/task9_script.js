var taskNineTextEqually = document.querySelector('#taskNineTextEqually');
var taskNineButtonEqully = document.querySelector('#taskNineButtonEqully');
taskNineButtonEqully.onclick=function() {
	var taskNineDay = Number(document.querySelector('#taskNineDay').value);
	var taskNineMonth = Number(document.querySelector('#taskNineMonth').value);
	var taskNineYear = Number(document.querySelector('#taskNineYear').value);
	if (taskNineDay < 1) {
		alert('Not corection day');
	}
	if (taskNineDay >= 1 && taskNineDay <= 9) {
		numberDays = taskNineDay;
		daysOne = daysTwo = 0;
	} else if (taskNineDay > 9 && taskNineDay < 32) {
		numberDays = taskNineDay % 10;
		daysOne = (taskNineDay - numberDays) / 10;
		daysTwo = taskNineDay - (taskNineDay - numberDays);
		numberDays = 0;
	} else {
		alert('Not understand day');
	}
	if (taskNineMonth < 1) {
		alert('Not corection month');
	} else if (taskNineMonth >= 1 && taskNineMonth <= 9) {
		numberMonth = taskNineMonth;
		monthesOne = monthesTwo = 0;
	} else if (taskNineMonth > 9 && taskNineMonth < 13) {
		numberMonth = taskNineMonth % 10;
		monthesOne = (taskNineMonth - numberMonth) / 10;
		monthesTwo = taskNineMonth - (taskNineMonth - numberMonth);
		numberMonth = 0;   
	} else {
		alert('Not understand month');
	}
	if (taskNineYear < 999) {
		alert('Not corection year');
	}
	if (taskNineYear >= 999 && taskNineYear <= 9999){
		numberYears = taskNineYear % 1000;
		yearsOne = (taskNineYear - numberYears) / 1000;
		yearsTwo = ((taskNineYear - (taskNineYear - numberYears)) - numberYears % 100) / 100;
		yearThree = ((numberYears - ((taskNineYear - (taskNineYear - numberYears)) - numberYears % 100)) - (numberYears - ((taskNineYear - (taskNineYear - numberYears)) - numberYears % 10))) / 10;
		yearFour = (numberYears - ((taskNineYear - (taskNineYear - numberYears)) - numberYears % 10));
	} else {
		alert('Not understand year');
	}
	var sume = numberDays + daysOne + daysTwo + numberMonth + monthesOne + monthesTwo + yearsOne + yearsTwo + yearThree + yearFour;
	if (sume < 10) {
		taskNineTextEqually.innerHTML = 'Your vibration number is  ' + sume;
	} else {
		numberSume = sume % 10;
		sumeOne = (sume - numberSume) / 10;
		result = sumeOne + numberSume;
		taskNineTextEqually.innerHTML = 'Your vibration number is ' + result;
	}
}