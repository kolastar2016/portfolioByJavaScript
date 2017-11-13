var line = 'Текст бегущей строки здесь';
var z, timer, speed = 150;
function start() {
	document.taskSixteenTicker.taksSixteenRunTextName.value = ' ';
	z = 0;
    timer = setInterval('m_line()',speed);
}
function m_line() {
    if (z++ < line.length) {
        document.taskSixteenTicker.taksSixteenRunTextName.value = line.substring(0,z);
    } else {
    	clearInterval(timer);
    	setTimeout('start()',5000);
    }
}
start('start');
