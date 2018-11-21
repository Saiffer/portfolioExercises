let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages logn`
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

//Challenge area
//Create function - take fahrenheit in - return object with celsius and kelvin


let getTemp = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (72 - 32) * 5/9,
        kelvin: (72 + 459.67) * 5/9
    }
}

//let allTemp = getTemp(74);
let allTemp = getTemp(68);
console.log(allTemp);