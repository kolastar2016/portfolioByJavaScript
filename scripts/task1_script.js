var mem = null;
function add(x) {
	calc.scr.value = calc.scr.value + x;
}
function eqv() {
	calc.scr.value = eval(calc.scr.value);
}
function clean() {
	calc.scr.value = '';
}
function pm() {
	calc.scr.value = (-1)*eval(calc.scr.value);
}
function bs() {
	var s = calc.scr.value;
	calc.scr.value = s.substr(0,s.length-1);
}
function mplus() {
	mem = parseFloat(eval(calc.scr.value)) + mem; 
}
function mmin() {
	mem = mem - eval(calc.scr.value); 
}
function memread() {
	if (mem != null) { 
		if (mem < 0) {
			calc.scr.value = calc.scr.value + '(' + mem + ')';
		} else {
			calc.scr.value = calc.scr.value + mem;
		}
	}
} 
function memclean() {
	mem = null;
}
var dvbut = document.getElementById('dvbut');
dvbut.onclick = function(eventdv) {
	eventdv = eventdv || window.eventdv;
	var tg = eventdv.target;
	var atr = tg.getAttribute('data-v');//такой атрибут есть только у кнопок, используемых для набора выражения(+,-, цифры и т.д.)
	if(atr != null) {
		add(atr);// или add(tg.value); 
	} else {
		switch(tg.name) {
			case 'eq': eqv();
			break;
			case 'bs': bs();
			break;
			case 'mmin': mmin();
			break;
			case 'mplus': mplus();
			break;
			case 'pm':pm();
			break;
			case 'memclean':memclean();
			break;
			case 'memread': memread();
			break;
			case 'clean': clean();
			break;
		} 
	} 
}
calc.scr.onkeydown = function(eventkey) {
	eventkey = eventkey || window.eventkey;
	eventkey.preventDefault();//запрет реакции по умолчанию
	var ch = eventkey.charCode || eventkey.keyCode;
	if (ch > 47 && ch < 58) {
		calc.scr.value += String.fromCharCode(ch); 
	}
	if (ch == 8){ 
		bs();
	}
}
calc.memread.onkeydown = function(eventdown) {
	eventdown.preventDefault();
}
dvbut.onkeydown = function(eventonkey) {
	eventonkey = evenonkey || window.eventonkey;
	eventonkey.preventDefault();
}