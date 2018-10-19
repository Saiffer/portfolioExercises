var tempOut;
var randNum = Math.floor((Math.random() * 10) + 1);
tempOut = document.getElementById('tempOut');
// tempOut.innerHTML = randNum;




function guessNumber(){
	var enteredNum, outNum;

	enteredNum = document.getElementById('number').value;
	outNum = document.getElementById('yourInput');

	if(enteredNum == randNum) {
		yourInput.innerHTML = 'You have guessed the number!!! GraZ!!!';
	}
	else if(enteredNum < randNum) {
		yourInput.innerHTML = 'You have entered number which is lower than required';
	}
	else {
		yourInput.innerHTML = 'You have entered number which is higher than required';
	}

}