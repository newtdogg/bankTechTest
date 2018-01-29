function User(account = new Account){
  this.account = account
  this.displayBalance = 0
}

User.prototype.deposit = function (amount) {
  this.account.storeMoney(amount)
  this.updateBalance()
}

User.prototype.withdraw = function (amount) {
  this.account.releaseMoney(amount)
  this.updateBalance()
}

User.prototype.updateBalance = function () {
  this.displayBalance = this.account.currentFunds
};
