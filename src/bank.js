function Bank(){
  this.displayBalance = 0
}

Bank.prototype.deposit = function (amount) {
  this.displayBalance += amount
};

Bank.prototype.withdraw = function (amount) {
  this.displayBalance -= amount
}
