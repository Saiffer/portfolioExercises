function add() {
	var result;
	var num1 = document.getElementById("num1").value;
	num1 = parseInt(num1);
	var num2 = document.getElementById("num2").value;
	num2 = parseInt(num2);
	result = num1 + num2;
	document.getElementById("output").innerHTML = result;
}

function substract() {
	var result;
	var num1 = document.getElementById("num1").value;
	num1 = parseInt(num1);
	var num2 = document.getElementById("num2").value;
	num2 = parseInt(num2);
	result = num1 - num2;
	document.getElementById("output").innerHTML = result;
}

