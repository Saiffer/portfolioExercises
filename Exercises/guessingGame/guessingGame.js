var numberToGuess = 7;

var userEnter = prompt("Enter the number to guess");

if(userEnter < numberToGuess) {
	alert("It's to low, try again");
}

else if(userEnter > numberToGuess) {
	alert("You are too high, try again");
}

else if(userEnter == numberToGuess) {
	alert("You did it!");
}
