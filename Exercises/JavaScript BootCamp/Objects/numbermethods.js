let num = 103.941;

console.log(num.toFixed(2));

//Round Method
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

//Random Method
let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

//Challenge area
//1 -5 - true if correct, false if not correct

let makeGuess = function(playerGuess) {
    let min = 1;
    let max = 5;
    guess = Math.floor(Math.random()*(max - min + 1));
    return guess === playerGuess ;
}



console.log(makeGuess(1));