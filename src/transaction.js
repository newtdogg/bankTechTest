function Transaction(date = new Date, moneyChanged, remainingBalance, transactionType){
  this.dateTime = date
  this.formatDateTime = this.dateTime.toLocaleString()
  this.moneyChanged = moneyChanged
  this.remainingBalance = remainingBalance
  this.transactionType = transactionType
}
