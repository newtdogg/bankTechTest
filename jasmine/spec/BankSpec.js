describe("Bank", function() {

  var bank;

  beforeEach(function() {
    bank = new Bank();
  });

  it("should be able to hold deposited money", function() {
    bank.storeMoney(100);
    expect(bank.currentFunds).toEqual(100);
  });

  it("should allow a user to see available funds", function() {
    bank.storeMoney(10)
    expect(bank.currentFunds).toEqual(10)
  })

  it("should be able to have money withdrawn", function() {
    bank.storeMoney(100);
    bank.releaseMoney(20);
    expect(bank.currentFunds).toEqual(80);
  })
});
