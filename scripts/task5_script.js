var button_task5 = document.getElementById('button_task5_button');
button_task5.onclick = function() {
	var name = prompt('Как Вас зовут?', '');
	var age = prompt('Сколько Вам лет?', '');
	if (age == '1') {
		alert('Привет ' + name + ' ' + 'Вам один годик!!!', '');
	}
	if (age > 1 && age < 5) {
		alert('Привет ' + name + ' ' + 'Вам ' + age + ' ' + 'годика!!!', '');
	}
	if (age > 4 && age < 21) {
		alert('Привет ' + name + ' ' + 'Вам ' + age + ' ' + 'лет!!!', '');
	}
	if (age == 21 || age == 31 || age == 41 || age == 51 || age == 61 || age == 71 || age == 81 || age == 91 || age == 101) {
		alert('Привет ' + name + ' ' + 'Вам ' + age + ' ' + 'год!!!', '');
	}
	if (age > 21 && age < 25 || age > 31 && age < 35 || age > 41 && age < 45 || age > 51 && age < 55 || age > 61 && age < 65 || age > 71 && age < 75 || age > 81 && age < 85 || age > 91 && age < 95 || age > 101 && age < 121) {
		alert('Привет ' + name + ' ' + 'Вам ' + age + ' ' + 'года!!!', '');
	}
	if (age > 24 && age < 31 || age > 34 && age < 41 || age > 44 && age < 51 || age > 54 && age < 61 || age > 64 && age < 71 || age > 74 && age < 81 || age > 84 && age < 91 || age > 94 && age < 101 || age > 104 && age < 105) {
		alert('Привет ' + name + ' ' + 'Вам ' + age + ' ' + 'лет!!!', '');
	}
	if (age < 0 || age > 120) {
		alert('Столько не живут', '');
	}
	if (age == 0){
		alert('Ты еще не родился', '');
	}
}