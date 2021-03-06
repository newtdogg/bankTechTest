function User(account = new Account){
  this.account = account
  this.displayBalance = 0
  this.transactions = []
  this.statement = null
}

User.prototype.deposit = function (amount) {
  this.account.storeMoney(amount)
  this.updateBalance()
  this.transactions.push([new Transaction(amount, this.displayBalance, 'deposit')])
}

User.prototype.withdraw = function (amount) {
  this.account.releaseMoney(amount)
  this.updateBalance()
  this.transactions.push([new Transaction(amount, this.displayBalance, 'withdrawal')])
}

User.prototype.updateBalance = function () {
  this.displayBalance = this.account.currentFunds
};

User.prototype.printStatement = function () {
  statement = new Statement(this.transactions)
  statement.printer
  this.statement = statement.formattedStatement
  return this.statement
}
