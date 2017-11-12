function learn_sign() {
	var date=document.znak_zodiac.your_date.value;
	var this_month=document.znak_zodiac.your_month.selectedIndex;
	with (document.znak_zodiac.znak){
		if (this_month==1 && date>=20 || this_month==2 && date<=18) {
			value="Водолей";
		} else if (this_month==2 && date>=19 || this_month==3 && date<=20) {
			value="Рыбы";
		} else if (this_month==3 && date>=21 || this_month==4 && date<=19) {
			value="Овен";
		} else if (this_month==4 && date>=20 || this_month==5 && date<=20) {
			value="Телец";
		} else if (this_month==5 && date>=21 || this_month==6 && date<=21) {
			value="Близнецы";
		} else if (this_month==6 && date>=22 || this_month==7 && date<=22) {
			value="Рак";
		} else if (this_month==7 && date>=23 || this_month==8 && date<=22) {
			value="Лев";
		} else if (this_month==8 && date>=23 || this_month==9 && date<=22) {
			value="Дева";
		} else if (this_month==9 && date>=23 || this_month==10 && date<=22) {
			value="Весы";
		} else if (this_month==10 && date>=23 || this_month==11 && date<=21) {
			value="Скорпион";
		} else if (this_month==11 && date>=22 || this_month==12 && date<=21) {
			value="Стрелец";
		} else if (this_month==12 && date>=22 || this_month==1 && date<=19) {
			value="Козерог";
		} else{
			value="Неверная дата!";
		}
		
		if ((date<1)||(this_month==2 && date>29)){
			value="Неверная дата!";
		}
		if ((this_month==(1||3||5||7||8||10||12)) && date>31) {
			value="Неверная дата!";
		}
		if ((this_month==(4||6||9||11)) && date>30) {
			value="Неверная дата!";
		}
	}
}
