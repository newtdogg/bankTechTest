function Bank(){
  this.currentAvailableFunds = 0
}

Bank.prototype.deposit = function (amount) {
  this.currentAvailableFunds += amount
};
