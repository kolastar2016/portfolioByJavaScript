var re_nameuser = /^[A-ZА-ЯЁ\'\`]{2,100}$/i;
var re_email = /^[A-Z0-9_$\.!\-]+@[A-Z0-9\.]+\.[A-ZА-ЯЁ]+$/i;
var re_pas_posible = /^[\w*\.\\\/#$%\^&!]{8,}$/;
var re_pas_digit = /\d/;
var re_pas_upper = /[A-Z]/;
regform.subm.onclick = function() {
	var flag = 0;// флаг ошибки, 0- ошибок нет
	if (!re_nameuser.test(regform.nameuser.value)) {
		message('Имя содержит недопустимые символы','lnameuser'); 
		flag = 1;
	}
	if (!re_email.test(regform.email.value)) { 
		message('Неудачный e-mail','lemail'); 
		flag = 2;   
	}
	if (!re_pas_posible.test(regform.pas1.value)) {
		message('Ваш пароль очень слабый, советую улучшить','lpas1'); 
		flag=3;
	}
	else if (!re_pas_digit.test(regform.pas1.value)) {
		message('Добавте цыфру','lpas1');
		flag=4;
	}
	else if (!re_pas_upper.test(regform.pas1.value)) {
		message('Добавте заглавные буквы','lpas1');
		flag=5;
	}
	else if (regform.pas1.value > 7) {
		message('Длина пароля должна быть не мение 7 символов','lpas1');
		flag=6;
	}
	else if (regform.pas1.value!=regform.pas2.value) {
		message('Несоответствие первого пароля со вторым','lpas2');
		flag=7;
	}
	if (flag === 0) { 
		//отправка формы
		regform.submit();//отправка формы
		regform.reset();//  сброс всех элементов формы на начальные значения
		alert('Данные успешно отправлены!');
	}
}
function message(mes,str_id){
	document.getElementById(str_id).innerHTML = mes;
}