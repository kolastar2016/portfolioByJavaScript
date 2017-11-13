var dim = document.querySelector('#dimantion');
var numdim = parseInt(dim.value);
var matrixs = document.querySelector('#matrixs');
var divbutmatr = document.createElement('div');	// ���������� ���� � ��������, ��� ������ � ���������
divbutmatr.id = 'divbutmatr';
var multiPlus = document.createElement('button');	//"+"
divbutmatr.appendChild(multiPlus);
multiPlus.id = 'multiPlus';
multiPlus.innerHTML = '+';
multiPlus.className = 'taskTwoMatrix';
divbutmatr.innerHTML += '<br>';
var multipleMultiplication = document.createElement('button');//"*"
divbutmatr.appendChild(multipleMultiplication);
multipleMultiplication.id = 'multipleMultiplication';
multipleMultiplication.innerHTML = '*';
multipleMultiplication.className = 'taskTwoMatrix';
divbutmatr.innerHTML += '<br>';
dim.onchange = function() {//���������� ������������ �� ������
	numdim = parseInt(dim.value);
	matrixs.innerHTML = '';
	var matr1 = document.createElement('div'); // �������� ����
	matrixs.appendChild(matr1);// �������� ����� ��� ���������� ����
	matr1.id = 'matr1';//������� �������
	for (var i = 0; i < numdim; i++) {
		for (var j = 0;j < numdim; j++) {
			var inp = matr1.appendChild(document.createElement('input'));//��������� ������
			inp.id = 'taskTwoInput';	
			matr1.appendChild(inp);
		}
		matr1.innerHTML += '<br>';
	}
	var matr2 = matr1.cloneNode(true);// ������������ �����
	var matr3 = matr1.cloneNode(true);// ������������ �����
	matrixs.appendChild(matr2);
	matr2.id = 'matr2';
	divbutmatr = matrixs.appendChild(divbutmatr);//���������� ����� � ��������
	matrixs.appendChild(matr3);
	matr3.id = 'matr3';
	multiPlus = document.getElementById('multiPlus');
	multiPlus.onclick = plusMatr12;
	multipleMultiplication = document.getElementById('multipleMultiplication');
	multipleMultiplication.onclick = multMatr12;
}
function plusMatr12() {
	var matr1 = document.getElementById('matr1');
	var matr2 = document.getElementById('matr2');
	var matr3 = document.getElementById('matr3');
	var inpm1 = matr1.getElementsByTagName('input');
	var inpm2 = matr2.getElementsByTagName('input');
	var inpm3 = matr3.getElementsByTagName('input');
	var n = numdim * numdim;
	for(i = 0; i < n; i++){
		inpm3[i].value = Number(inpm1[i].value) + Number(inpm2[i].value);
	}
}
function multMatr12() {
	var matr1 = document.getElementById('matr1');
	var matr2 = document.getElementById('matr2');
	var matr3 = document.getElementById('matr3');
	var inpm1 = matr1.getElementsByTagName('input');
	var inpm2 = matr2.getElementsByTagName('input');
	var inpm3 = matr3.getElementsByTagName('input');
	var mas1 = [];
	var mas2 = [];
	var mas3 = [];
	for (var i = 0; i < numdim; i++) {
		mas1[i] = [];// ������ �������
		mas2[i] = [];// ������ �������
		mas3[i] = [];// ������ �������
		for (var j = 0; j < numdim; j++) {
			mas1[i][j] = inpm1[j + numdim * i].value;//������� �������
			mas2[i][j] = inpm1[j + numdim * i].value;//������� �������			
		}			
	}
	for (var i = 0; i < numdim; i++) {// ���������
		for (var j = 0; j < numdim; j++) {//������� ����� � ������ �������
			for(var k=0, s=0; k<numdim; k++) {
				s += mas1[i][k] * mas2[k][j];
			}
			inpm3[j + numdim * i].value = s;
		}
	}
}