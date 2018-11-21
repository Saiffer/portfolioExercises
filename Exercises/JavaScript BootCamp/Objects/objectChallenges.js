let iHuman = {
    name: 'David',
    age: 27,
    location: 'Raleigh'
}

console.log(`${iHuman.name} is ${iHuman.age} and lives in ${iHuman.location}.`)

let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A peoples history',
    author: 'Howard Zinn',
    pageCount: 723
}

let temp = function(fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5/9,
        kelvin: (fahrenheit + 459.67) * 5/9
    } 
}

let tempGet = temp(32)

console.log(tempGet)


let myAccount = {
    name: 'David Aznaurov',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

//addIncome
let addIncome = function (account, amount) {
    account.income = account.income + amount
}
//resetAccount
let resetAccount = function (expenses, income) {
    myAccount.expenses = 0
    myAccount.income = 0
}
//getAccountSummary
let getAccountSummary = function(account) {
    return `Account for ${myAccount.name} has ${myAccount.income - myAccount.expenses}. $${myAccount.income} in income and $${myAccount.expenses} in expenses.`
}
//Account for David has 900$. $1000 in income and $100 in expenses.

addExpense(myAccount, 2.50)
addExpense(myAccount, 97.5)
addIncome(myAccount, 1000)
console.log(getAccountSummary())
resetAccount()
console.log(getAccountSummary())


let restaraunt = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

restaraunt.seatParty(72)
console.log(restaraunt.checkAvailability(4))
restaraunt.removeParty(5)
console.log(restaraunt.checkAvailability(4))

//isValidPassword
//length is more than 8 and it doesn't conbtain word password
let isValidPassword = function(pass) {
    if (pass.length < 8 || pass.includes('password')) {
        return false
    }else {
        return true
    }
}
console.log(isValidPassword('asdfp'))
console.log(isValidPassword('asdfp123@#@#asda'))
console.log(isValidPassword('asdfppassword123'))

//1-5 - true false- if not correct


let makeGuess = function (userNum){
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max-min+1)) + min
    return userNum === randomNum
}
console.log(makeGuess(1))
