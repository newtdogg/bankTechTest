describe("Statement", function(){

  var statement;
  var user

  beforeEach(function(){
    user = jasmine.createSpyObj('user',['transactions'])
    user.transactions = [["29/01/2018, 15:00:14", 50, 100, "deposit"]]
    statement = new Statement(user.transactions)
  })

  it("should have a heading of the transactions statement table", function(){
    expect(statement.formattedStatement).toEqual(`| Date | Net Change (£) | Transaction Type | Remaining Balance |`)
  })

  it("should format the transactions in the table", function(){
    statement.printer()
    expect(statement.formattedStatement).toEqual(`| Date | Net Change (£) | Transaction Type | Remaining Balance |\n|29/01/2018, 15:00:14|50|deposit|100|`)
  })
})
