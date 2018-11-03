let temp = 65;

if (temp >= 60 && temp <=90) {
	console.log('It is pretty nice out');
} else if (temp <= 0 || temp >= 120) {
	console.log('Do not go outside');
} else {
	console.log('Do what you want');
}


// CHallenge area

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
	console.log('Offer only vegan dishes');
} else if (isGuestOneVegan || isGuestTwoVegan) {
	console.log('Offer some of the vegan dishes');
} else {
	console.log('Do not offer vegan dishes');
}