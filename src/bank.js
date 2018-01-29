function Bank(){
  this.currentFunds = 0
}

Bank.prototype.storeMoney = function (amount) {
  this.currentFunds += amount
};

Bank.prototype.releaseMoney = function (amount) {
  this.currentFunds -= amount
}
