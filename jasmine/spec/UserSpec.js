describe("User", function() {

  var user;
  // var bank;

  beforeEach(function() {
    user = new User();
  });

  it("should let a user open a bank acount", function(){
    user.openNewAccount()
    expect(user.bank).not.toBeNull()
  })

  
})
