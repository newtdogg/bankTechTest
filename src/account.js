function Account(){
  this.currentFunds = 0
}

Account.prototype.storeMoney = function (amount) {
  this.currentFunds += amount
};

Account.prototype.releaseMoney = function (amount) {
  this.currentFunds -= amount
}
