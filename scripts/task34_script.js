var i = 1;

function AddItems() {
	i++;
	var divItems = document.getElementById("items");
	var newitem = "<span class=\"addNumber_task34\">" + i + ": </span>";
	newitem += "<input class=\"addText_task34\" type=\"text\" name=\"item" + i + "\"/>";
	newitem += "<input class=\"add_buttom_task34\" type=\"button\" value=\" + \" onClick=\"AddItems()\;\"/>";
	var newnode = document.createElement("div");
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
	var form = document.getElementById('mainForm');  
	for (var k = 0; k < i; k++) {
		temp = Number(form.elements[k*2].value);
		if (isNumeric(temp)) {
			if (temp > maxValue) {
				maxValue = temp;
			}
		} else {
			alert("Перевірте дані в " + (k+1) + "-му полі");
			correctData = false;
		}
	}

	if (correctData) {
		var divGist = document.getElementById("gist");
		divGist.innerText = '';
    
		var ul = document.createElement("ul");
		divGist.appendChild(ul);

		var value, percent;
		for (k = 0; k < i; k++) {
			value = Number(form.elements[k*2].value);
			var li = document.createElement('li');
			li.classList.add('li_task34');
			var span = document.createElement('span');
			span.appendChild(document.createTextNode(value));
			li.appendChild(span);
			
			span.classList.add('gst');

			var span2 = document.createElement('span');
			li.appendChild(span2);
			percent = value/maxValue*100;
			percent = Math.round(percent);
      
			span2.style.width = percent+"%";
			span2.appendChild(document.createTextNode(percent + "%"));
			span2.classList.add('gst_task34');
			ul.appendChild(li);
		}
	}
}