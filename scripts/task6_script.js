taskSixYear.oninput=function(){
	var taskSixYear=document.getElementById("taskSixYear");
	var year_task6=document.getElementById("taskSixWriteYear");
	var len=taskSixYear.value.trim().length;
	var yv=parseFloat(taskSixYear.value);
	if((!isNaN(yv)) && (yv>=1980 && yv<=2024)){
		if(yv==1980 || yv==1984 || yv==1988 || yv==1992 || yv==1996 || yv==2000 || yv==2004 || yv==2008 || yv==2012 || yv==2016 || yv==2020 || yv==2024){	
			taskSixMonth.value = "2";
			taskSixDay.value = "29";
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

taskSixMonth.oninput=function(){
	var taskSixMonth=document.getElementById("taskSixMonth");
	var month_task6=document.getElementById("taskSixWriteMonth");
	var len=taskSixMonth.value.trim().length;	//trim() - удаляет пробелы в начале и в конце строки
	var mv=parseFloat(taskSixMonth.value);
	if (!isNaN(mv) && mv>0 && mv<13 && len<=2 ){	// если пользователь ввел число от 1 до 12 
		if (mv==4 || mv==6 || mv==9 || mv==11){
			month_task6.innerHTML="30 дней";
		} else if ((mv==2)&&(taskSixYear.value==1980 || taskSixYear.value==1984 || taskSixYear.value==1988 || taskSixYear.value==1992 || taskSixYear.value==1996 || taskSixYear.value==2000 || taskSixYear.value==2004 || taskSixYear.value==2008 || taskSixYear.value==2012 || taskSixYear.value==2016 || taskSixYear.value==2020 || taskSixYear.value==2024)){
			month_task6.innerHTML="Високосный месяц";
			taskSixDay.value = "29";
		} else if (mv==2){
			month_task6.innerHTML="Не високсный месяц";
			taskSixDay.value = "28";
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
	
taskSixDay.oninput=function(){
	var taskSixDay=document.getElementById("taskSixDay");
	var day_task6=document.getElementById("taskSixWriteDay");
	var len=taskSixDay.value.trim().length;
	var dv=parseFloat(taskSixDay.value);
	if (!isNaN(dv) && dv>0 && dv<31 && len<=2 ){
		if (dv==30 && (taskSixMonth.value==4 || taskSixMonth.value==6 || taskSixMonth.value==9 || taskSixMonth.value==11)){
			day_task6.innerHTML="30 дней";
		}
		else if (dv==31 && (taskSixMonth.value==4 || taskSixMonth.value==6 || taskSixMonth.value==9 || taskSixMonth.value==11)){
			day_task6.innerHTML="31 день";
		}
	} else {
		day_task6.innerHTML="нет такого дня";
	}
	if (len==0){
		day_task6.innerHTML="";
	}
}