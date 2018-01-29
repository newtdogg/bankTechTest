function User(account = new Account){
  this.account = account
  this.displayBalance = 0
  this.transactions = []
}

User.prototype.deposit = function (amount) {
  this.account.storeMoney(amount)
  this.updateBalance()
  transaction = new Transaction(amount, this.displayBalance, 'deposit')
}

User.prototype.withdraw = function (amount) {
  this.account.releaseMoney(amount)
  this.updateBalance()
  transaction = new Transaction(amount, this.displayBalance, 'withdrawal')
}

User.prototype.updateBalance = function () {
  this.displayBalance = this.account.currentFunds
};
