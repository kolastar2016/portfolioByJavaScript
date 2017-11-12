var i = 0;
var monthUA = ["Січень", 
             "Лютий", 
             "Березень", 
             "Квітень", 
             "Травень", 
             "Черввень",
             "Липень",
             "Серпень",
             "Вересень",
             "Жовтень",
             "Листопад",
             "Грудень"];
             
function getDate()
{
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if(seconds < 10)
    {
        var seconds = '0' + seconds;
    }

    if(minutes < 10)
    {
        minutes = '0' + minutes;
    }

    if(hours < 10)
    {
        hours = '0' + hours;
    }

    document.getElementById('currentTime').innerHTML ="Поточний час: " + hours + ':' + minutes + ':' + seconds;
}
setInterval(getDate, 0);

function AddTims () {
    i++;
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var years = date.getFullYear();
    var months = date.getMonth();
    var days = date.getDay();

    var tableMain = document.getElementById("mainT");
    var insertData = "<td>" + i + "</td>";
    insertData += "<td><input id=\"checkbox_task31\" type=\"checkbox\" name=\"alarm" + i + "\" value=\"a" + i + "\" />";

    insertData += "<td><select name=\"selectHour\">";
    for (var k = 0; k <= 23; k++) {
        insertData += "<option value=\"" + k+ "\">" + k + "</option>";
		
	}
    insertData += "</select></td>";

    insertData += "<td><select name=\"selectMinute\">";
    for (var k = 0; k <= 59; k++) {
        insertData += "<option value=\"" + k+ "\">" + k + "</option>";
    }
    insertData += "</select></td>";

    insertData += "<td><select name=\"selectSecond\">";
    for (var k = 0; k <= 59; k++) {
        insertData += "<option value=\"" + k+ "\">" + k + "</option>";
    }
    insertData += "</select></td>";

    insertData += "<td><select name=\"selectDay\">";
    for (var k = 1; k <= 31; k++) {
        insertData += "<option value=\"" + k+ "\">" + k + "</option>";
    }
    insertData += "</select></td>";

    insertData += "<td><select name=\"selectMonth\">";
    for (var k = 1; k <= 12; k++) {
        insertData += "<option value=\"" + k+ "\">" + monthUA[k-1] + "</option>";
    }
    insertData += "</select></td>";

    insertData += "<td><select name=\"selectYear\">";
    for (var k = 2017; k <= 2057; k++) {
        insertData += "<option value=\"" + k+ "\">" + k + "</option>";
    }
    insertData += "</select></td>";

    var newTR = document.createElement("tr");
    newTR.innerHTML = insertData;
    tableMain.appendChild(newTR);
}
