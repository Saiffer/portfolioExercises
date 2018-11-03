let isAccountLocked = true;
let userRole = 'admin';

if(isAccountLocked) {
	console.log('Is account locked');
}
else if (!isAccountLocked) {
	console.log('Account is not locked');
}

let temp = 45;

if (temp <= 31) {
	console.log('It is freezing');
} else if (temp >= 80) {
	console.log('It is hot outside');
} else {
	console.log('It is pleasant');
}

