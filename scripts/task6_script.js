year.oninput=function(){
	var year=document.getElementById("year");
	var year_task6=document.getElementById("year_task6_write");
	var len=year.value.trim().length;
	var yv=parseFloat(year.value);
	if((!isNaN(yv)) && (yv>=1980 && yv<=2024)){
		if(yv==1980 || yv==1984 || yv==1988 || yv==1992 || yv==1996 || yv==2000 || yv==2004 || yv==2008 || yv==2012 || yv==2016 || yv==2020 || yv==2024){	
			month.value = "2";
			day.value = "29";
			year_task6.innerHTML="Это високосный год";
		} else {
			year_task6.innerHTML="Выберите месяц";
		}
	}else{
		year_task6.innerHTML="Нет такого года (С 1980 по 2024)";
	}
	if (len==0){
		year_task6.innerHTML="";
	}
}

month.oninput=function(){
	var month=document.getElementById("month");
	var month_task6=document.getElementById("month_task6_write");
	var len=month.value.trim().length;	//trim() - удаляет пробелы в начале и в конце строки
	var mv=parseFloat(month.value);
	if (!isNaN(mv) && mv>0 && mv<13 && len<=2 ){	// если пользователь ввел число от 1 до 12 
		if (mv==4 || mv==6 || mv==9 || mv==11){
			month_task6.innerHTML="30 дней";
		} else if ((mv==2)&&(year.value==1980 || year.value==1984 || year.value==1988 || year.value==1992 || year.value==1996 || year.value==2000 || year.value==2004 || year.value==2008 || year.value==2012 || year.value==2016 || year.value==2020 || year.value==2024)){
			month_task6.innerHTML="Високосный месяц";
			day.value = "29";
		} else if (mv==2){
			month_task6.innerHTML="Не високсный месяц";
			day.value = "28";
		} else {
			month_task6.innerHTML="31 день";
		}
	} else {
		month_task6.innerHTML="нет такого месяца";
	}
	if (len==0){
		month_task6.innerHTML="";
	}
}
	
day.oninput=function(){
	var day=document.getElementById("day");
	var day_task6=document.getElementById("day_task6_write");
	var len=day.value.trim().length;
	var dv=parseFloat(day.value);
	if (!isNaN(dv) && dv>0 && dv<31 && len<=2 ){
		if (dv==30 && (month.value==4 || month.value==6 || month.value==9 || month.value==11)){
			day_task6.innerHTML="30 дней";
		}
		else if (dv==31 && (month.value==4 || month.value==6 || month.value==9 || month.value==11)){
			day_task6.innerHTML="31 день";
		}
	} else {
		day_task6.innerHTML="нет такого дня";
	}
	if (len==0){
		day_task6.innerHTML="";
	}
}