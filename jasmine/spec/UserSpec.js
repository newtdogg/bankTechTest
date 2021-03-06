describe("User", function() {

  var user;
  var account;
  var transaction;

  beforeEach(function() {
    account = jasmine.createSpyObj('account',['storeMoney', 'releaseMoney', 'currentFunds'])
    transaction = jasmine.createSpyObj('transaction',['formatDateTime', 'moneyChanged', 'remainingBalance', 'transactionType'])
    user = new User(account);
    account.currentFunds = 100

  });

  it("a user is initialised with a new account", function(){
    expect(user.account).not.toBeNull()
  })

  it("should allow a user to view their current account balance", function(){
    expect(user.displayBalance).toEqual(0)
  })

  it("should allow a user to store money in their bank account", function(){
    user.deposit(100)
    expect(user.displayBalance).toEqual(100)
  })

  it("should allow a user to withdraw money from their bank account", function(){
    account.currentFunds = 50
    user.withdraw(50)
    expect(user.displayBalance).toEqual(50)
  })

  it("should create a new transaction when a user deposits/withdraws money", function() {
    user.withdraw(50)
    expect(user.transactions[1]).not.toBeNull()
  })
})
