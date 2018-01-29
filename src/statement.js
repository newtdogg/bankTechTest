function Statement(transactions) {
  this.formattedStatement = `| Date | Net Change (£) | Transaction Type | Remaining Balance |`
  this.transactions = transactions
}

Statement.prototype.printer = function(){
  for (var i = 0; i < this.transactions.length; i++) {
    transaction = this.transactions[i]
    this.formattedStatement += "\n|" + transaction[0] + "|" + transaction[1] + "|" + transaction[3] + "|" + transaction[2] + "|"
  }
}
