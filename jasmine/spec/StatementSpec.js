describe("Statement", function(){

  var statement;
  var user

  beforeEach(function(){
    user = jasmine.createSpyObj('user',['transactions'])
    user.transactions = [["29/01/2018, 15:00:14", 50, 100, "deposit"]]
    statement = new Statement(user.transactions)
  })

  it("should print the list of user transactions", function(){
    statement.printer()
    expect(statement.formattedStatement).toEqual(`| Date | Net Change (£) | Transaction Type | Remaining Balance |
|29/01/2018, 15:00:14|50|deposit|100|\n`)
  })
})
