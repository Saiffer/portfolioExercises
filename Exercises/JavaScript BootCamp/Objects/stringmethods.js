let name = 'David Aznaurov';

//Length property
console.log(name.length);

//Convert to upper case
console.log(name.toUpperCase());

//Convert to lower case
console.log(name.toLowerCase());

//Includes method
let password = 'abc123pasd098';
console.log(password.includes('password'));

//Trim
let name2 = ' David Aznaurov ';
console.log(name2.trim());

//Challenge area
//isValidPassword
//length is more than 8 - ant it doesn't contain the word password

let isValidPassword = function(password) {
    if (password.length < 8 || password.includes('password')) {
        return false;
    }
    else {
        return true;
    }
}

console.log(isValidPassword('asd'));
console.log(isValidPassword('asdasd123'));
console.log(isValidPassword('asdasd12password'));