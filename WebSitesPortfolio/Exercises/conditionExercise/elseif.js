var age = prompt("Please enter your age");


if(age == 21) {
	console.log("Happy 21th birthday!!!");
}

else if(age % 2 === 0) {
	console.log("Age is odd");
}

else if (age<0) {
	console.log("You have entered wrong value");
}

else if (age % Math.sqrt(age) === 0 ) {
	console.log("Perfect square");
}

else {
	console.log("Your age is: " + age);
}
