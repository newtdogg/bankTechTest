function User(){
  this.bank = null
}

User.prototype.openNewAccount = function(){
  this.bank = new Bank
}
