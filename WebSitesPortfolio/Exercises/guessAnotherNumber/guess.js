var prNum, tempOut;
prNum = Math.floor((Math.random()*10)+1);
// tempOut = document.getElementById("tempOut");
// tempOut.innerHTML = prNum;
console.log(prNum);

function guessNum() {
	var num2, outNum;

	num2 = document.getElementById("number").value;
	outNum = document.getElementById("outNum");
	
	if(num2 > prNum){
		outNum.innerHTML = "You have entered higher number";
	}
	else if(num2 < prNum) {
		outNum.innerHTML = "You have entered lower number";
	}
	else {
		outNum.innerHTML = "You got the correct number";
	}
}

