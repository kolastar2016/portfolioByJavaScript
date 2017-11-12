var dim=document.querySelector("#dimantion");
var numdim=parseInt(dim.value);
var matrixs=document.querySelector("#matrixs");
var divbutmatr=document.createElement("div");	// Добавление дива с кнопками, для работы с матрицами
divbutmatr.id="divbutmatr";

var mplus=document.createElement("button");	//"+"
divbutmatr.appendChild(mplus);
mplus.id="mplus";
mplus.innerHTML="+";
mplus.className='matr_task2';
divbutmatr.innerHTML+="<br>";

var mmul=document.createElement("button");//"*"
divbutmatr.appendChild(mmul);
mmul.id="mmul";
mmul.innerHTML="*";
mmul.className='matr_task2';
divbutmatr.innerHTML+="<br>";

dim.onchange=function(){//назначение обработчиков на кнопки
	numdim=parseInt(dim.value);
	matrixs.innerHTML="";
	var matr1=document.createElement("div"); // Создание тега
	matrixs.appendChild(matr1);// Указание места для созданного тега
	matr1.id="matr1";//Задание свойств
	for(var i=0; i<numdim; i++){
		for(var j=0;j<numdim; j++){
			var inp=matr1.appendChild(document.createElement('input'));//Добавляем Инпуты
			inp.id='inp_task2';	
			matr1.appendChild(inp);
		}
	matr1.innerHTML+="<br>";
	}
	var matr2=matr1.cloneNode(true);// Клонирование узлов
	var matr3=matr1.cloneNode(true);// Клонирование узлов
	matrixs.appendChild(matr2);
	matr2.id="matr2";
	divbutmatr=matrixs.appendChild(divbutmatr);//размещение блока с кнопками
	matrixs.appendChild(matr3);
	matr3.id="matr3";
	mplus=document.getElementById("mplus");
	mplus.onclick=plusMatr12;
	mmul=document.getElementById("mmul");
	mmul.onclick=multMatr12;
}

function plusMatr12(){
	var matr1=document.getElementById("matr1");
	var matr2=document.getElementById("matr2");
	var matr3=document.getElementById("matr3");
	var inpm1=matr1.getElementsByTagName("input");
	var inpm2=matr2.getElementsByTagName("input");
	var inpm3=matr3.getElementsByTagName("input");
	var n=numdim*numdim;
	for(i=0; i<n; i++){
		inpm3[i].value=Number(inpm1[i].value)+Number(inpm2[i].value)
	}
}

function multMatr12(){
	var matr1=document.getElementById("matr1");
	var matr2=document.getElementById("matr2");
	var matr3=document.getElementById("matr3");
	var inpm1=matr1.getElementsByTagName("input");
	var inpm2=matr2.getElementsByTagName("input");
	var inpm3=matr3.getElementsByTagName("input");
	var mas1=[];
	var mas2=[];
	var mas3=[];
	for(var i=0; i<numdim; i++){
		mas1[i]=[];// строки массива
		mas2[i]=[];// строки массива
		mas3[i]=[];// строки массива
		for(var j=0; j<numdim; j++){
			mas1[i][j]=inpm1[j+numdim*i].value;//столбцы массива
			mas2[i][j]=inpm1[j+numdim*i].value;//столбцы массива			
		}			
	}
	for(var i=0; i<numdim; i++){// Умножение
		for(var j=0; j<numdim; j++){//Счетчик строк в третьм массиве
			for(var k=0, s=0; k<numdim; k++){
				s+=mas1[i][k]*mas2[k][j];
			}
			inpm3[j+numdim*i].value=s;
		}
	}
}