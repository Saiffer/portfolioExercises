//Global scope
    //Local scope

let convert = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;

  if (celsius <= 0) {
    let isFreezing = true;
  }

  return celsius;
}
let firstValue = convert(32);
let secondValue = convert(68);
console.log(firstValue);
console.log(secondValue);