//Multiply arguments

let add = function(a, b, c ) {
    return a + b + c;
}

let result = add(2, 3, 3);

console.log(result); 

//Default arguments

let getScoreText = function (name = 'Anonimous', score = 0) {
    //return 'Name: ' + name + ' - Score: ' + score;
    return `Name: ${name} - Score: ${score}`;
}


let scoreText = getScoreText('Andrew', 100);
console.log(scoreText);

//Challenge

/*let getTip = function (spent, tipPercent = 0.2) {
    return spent * tipPercent;
}

let totalTip = getTip(100);
console.log(totalTip);*/

let name = 'Jen'
let age = 12;
console.log(`Hey, my name is ${name}! I am ${age} years old`);

//Challenge

let getTip = function (spent, tipPercent = 0.2) {
    let percent = tipPercent * 100;
    let tip = spent * tipPercent;
    return `A ${percent}% on $${spent} will be $${tip}`;
}

let tip = getTip(40,0.25);
console.log(tip);




