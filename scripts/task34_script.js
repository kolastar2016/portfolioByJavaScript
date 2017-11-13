var i = 1;
function AddItems() {
	i++;
	var divItems = document.getElementById('taskThirtyfourItems');
	var newitem = '<span class=\"taskThirtyfourAddNumber\">' + i + ': </span>';
	newitem += '<input class=\"taskThirtyfourAddText\" type=\"text\" name=\"item' + i + '\"/>';
	newitem += '<input class=\"taskThirtyfourAddButtom\" type=\"button\" value=\" + \" onClick=\"AddItems()\;\"/>';
	var newnode = document.createElement('div');
	newnode.innerHTML = newitem;
	divItems.appendChild(newnode);
} 
function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}
function GetGist() {
	var temp;
	var correctData = true;
	var maxValue = 0;
	var form = document.getElementById('taskThirtyfourMainform');  
	for (var k = 0; k < i; k++) {
		temp = Number(form.elements[k * 2].value);
		if (isNumeric(temp)) {
			if (temp > maxValue) {
				maxValue = temp;
			}
		} else {
			alert('Перевірте дані в ' + (k + 1) + '-му полі');
			correctData = false;
		}
	}
	if (correctData) {
		var divGist = document.getElementById('taskThirtyfourBarchart');
		divGist.innerText = '';
    	var ul = document.createElement('ul');
		divGist.appendChild(ul);
		var value, percent;
		for (k = 0; k < i; k++) {
			value = Number(form.elements[k * 2].value);
			var li = document.createElement('li');
			li.classList.add('li_task34');
			var span = document.createElement('span');
			span.appendChild(document.createTextNode(value));
			li.appendChild(span);
			span.classList.add('barChart');
			var span2 = document.createElement('span');
			li.appendChild(span2);
			percent = value / maxValue * 100;
			percent = Math.round(percent);
			span2.style.width = percent + "%";
			span2.appendChild(document.createTextNode(percent + "%"));
			span2.classList.add('barChartNext');
			ul.appendChild(li);
		}
	}
}