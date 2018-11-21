const account = {
    name: 'David Aznaurov',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
    let totalExpenses = 0
    let totalIncome = 0
    this.expenses.forEach(function(expense) {
        totalExpenses = totalExpenses + expense.amount
    })
    this.income.forEach(function(income) {
        totalIncome = totalIncome + income.amount
    })
        let balance = totalIncome - totalExpenses
        return `${this.name} has $${balance} balance. $${totalIncome} in income and $${totalExpenses} in expenses`
    }
}

// Expense -> description, amount
// addExpense -> description, amount
//getAccountSummary -> total up all expenses
// -> David Aznaurov has 1250 in expenses



account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1500)
account.addIncome('Stocks', 1200)
console.log(account.getAccountSummary())
console.log(account.income)