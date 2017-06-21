/*online clock*/
function clock(idelem) {
	var d = new Date();         
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

	document.getElementById(idelem).innerHTML= 
		(h < 10? '0' + h:h)+':'+(m < 10? '0' + m:m)+':'+(s < 10? '0' + s:s);
   			setTimeout(clock,1000,idelem);
}
clock('clock');