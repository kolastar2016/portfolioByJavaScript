var equallys = document.querySelector("#equallys");
var buttonEqually = document.querySelector("#buttonEqually");

buttonEqually.onclick=function(){
	var days=Number(document.querySelector("#days").value);
	var monthes=Number(document.querySelector("#monthes").value);
	var years=Number(document.querySelector("#years").value);
	if (days<1){
		alert("Not corection day");
	}
	if(days>=1 && days<=9){
		numberDays = days;
		daysOne=daysTwo=0;
	} else if (days>9 && days<32){
		numberDays=days % 10;
		daysOne = (days - numberDays)/10;
		daysTwo = days-(days - numberDays);
		numberDays=0;
	} else {
		alert("Not understand day");
	}
	if (monthes<1){
		alert("Not corection month");
	} else if(monthes>=1 && monthes<=9){
		numberMonth = monthes;
		monthesOne=monthesTwo=0;
	} else if (monthes>9 && monthes<13){
		numberMonth=monthes % 10;
		monthesOne = (monthes - numberMonth)/10;
		monthesTwo = monthes-(monthes - numberMonth);
		numberMonth=0;   
	} else {
		alert("Not understand month");
	}
	if (years<999){
		alert("Not corection year");
	}
	if(years>=999 && years<=9999){
		numberYears=years % 1000;
		yearsOne = (years - numberYears)/1000;
		yearsTwo = ((years-(years - numberYears))-numberYears%100)/100;
		yearThree =((numberYears-((years-(years - numberYears))-numberYears%100))-(numberYears - ((years-(years - numberYears))-numberYears%10)))/10;
		yearFour =(numberYears - ((years-(years - numberYears))-numberYears%10));
	} else {
		alert("Not understand year");
	}
	var sume =numberDays + daysOne + daysTwo + numberMonth + monthesOne + monthesTwo + yearsOne + yearsTwo + yearThree + yearFour;
	if (sume<10){
		equallys.innerHTML="Your vibration number is  "+sume;
	} else {
		numberSume = sume%10;
		sumeOne = (sume - numberSume)/10;
		result = sumeOne + numberSume;
		equallys.innerHTML="Your vibration number is "+result;
	}
}