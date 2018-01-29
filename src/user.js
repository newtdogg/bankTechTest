function User(){
  this.bank = null
  this.displayBalance = 0
}

User.prototype.openNewAccount = function(bank = new Bank){
  this.bank = bank
}

User.prototype.updateBalance = function () {
  this.displayBalance = this.bank.currentFunds
};
