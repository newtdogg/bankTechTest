describe("Account", function() {

  var account;

  beforeEach(function() {
    account = new Account();
  });

  it("should be able to hold deposited money", function() {
    account.storeMoney(100);
    expect(account.currentFunds).toEqual(100);
  });

  it("should allow a user to see available funds", function() {
    account.storeMoney(10)
    expect(account.currentFunds).toEqual(10)
  })

  it("should be able to have money withdrawn", function() {
    account.storeMoney(100);
    account.releaseMoney(20);
    expect(account.currentFunds).toEqual(80);
  })
});
