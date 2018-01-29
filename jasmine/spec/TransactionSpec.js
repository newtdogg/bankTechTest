describe("Transaction", function(){

    var transaction

    beforeEach(function() {
      date = "29/01/2018, 15:00:14"
      transaction = new Transaction(date, 50, 100, 'deposit')
    })

    it("A transaction should have a date and time attached to it", function(){
      expect(transaction.formatDateTime).toEqual("29/01/2018, 15:00:14")
    })

    it("A transaction should store the amount of money deposited or withdrawn", function(){
      expect(transaction.moneyChanged).toEqual(50)
    })

    it("A transaction should store the remaining balance", function(){
      expect(transaction.remainingBalance).toEqual(100)
    })

    it("A transaction should store the type of transaction", function(){
      expect(transaction.transactionType).toEqual('deposit')
    })
})
