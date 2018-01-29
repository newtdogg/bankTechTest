describe("User", function() {

  var user;
  var bank;

  beforeEach(function() {
    user = new User();
    bank = jasmine.createSpyObj('bank',['storeMoney', 'releaseMoney'])
    user.openNewAccount(bank)
  });

  it("should let a user open a bank acount", function(){
    expect(user.bank).not.toBeNull()
  })

  it("should allow a user to view their current account balance", function(){
    expect(user.displayBalance).toEqual(0)
  })

  // it("should allow a user to store money in their bank account", function(){
  //   user.deposit(100)
  //
  // })

})
