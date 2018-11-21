let myAccount = {
    name: 'David Aznaurov',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount;
}

let addIncome = function(account, amount) {
    account.income = account.income + amount;
}

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
}

let getAccountSummary = function(account) {
    let overall = account.income - account.expenses;
    return `Account for ${account.name} has ${overall}. $${account.income} in income. $${account.expenses} in expenses`;
}


addExpense(myAccount, 127);
addIncome(myAccount, 1800);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
