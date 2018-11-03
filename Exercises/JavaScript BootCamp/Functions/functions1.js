let greetUser = function() {
  console.log('Welcome user!');
}

greetUser();

  let square = function (x) {
    let result = x * x;
    return result;
}

let value = square(4);
let otherValue = square(3);

console.log(value);
console.log(otherValue);

//Convert Fahrenheit to Calsius

//let celsius = (fahrenheit - 32) * 5/9;

let convert = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  return celsius;
}
let firstValue = convert(32);
let secondValue = convert(68);
console.log(firstValue);
console.log(secondValue);