let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';
console.log(`${myBook.title} by ${myBook.author}`);

//Challenge

//name, age,location

let myPerson = {
    name: 'David',
    age: 27,
    location: 'Raleigh NC'
}

console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}`);

myPerson.age = myPerson.age + 1;

console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}`);