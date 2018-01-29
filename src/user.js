function User(account = new Account){
  this.account = account
  this.displayBalance = 0
}

User.prototype.depositMoney = function (amount) {
  this.account.storeMoney(amount)
  this.updateBalance()
}

User.prototype.updateBalance = function () {
  this.displayBalance = this.account.currentFunds
};
