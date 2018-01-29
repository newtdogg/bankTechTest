describe("User", function() {

  var user;
  var account;

  beforeEach(function() {
    account = jasmine.createSpyObj('account',['storeMoney', 'releaseMoney', 'currentFunds'])
    user = new User(account);
    account.currentFunds = 100
    // });
  });

  it("a user is initialised with a new account", function(){
    expect(user.account).not.toBeNull()
  })

  it("should allow a user to view their current account balance", function(){
    expect(user.displayBalance).toEqual(0)
  })

  it("should allow a user to store money in their bank account", function(){
    user.depositMoney(100)
    expect(user.displayBalance).toEqual(100)
  })

})
