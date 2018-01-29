describe("Bank", function() {

  var bank;

  beforeEach(function() {
    bank = new Bank();
  });

  it("should be able to hold deposited money", function() {
    bank.deposit(100);
    expect(bank.currentAvailableFunds).toEqual(100.00);
  });
});
