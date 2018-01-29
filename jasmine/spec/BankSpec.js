describe("Bank", function() {

  var bank;

  beforeEach(function() {
    bank = new Bank();
  });

  it("should be able to hold deposited money", function() {
    bank.deposit(100);
    expect(bank.displayBalance).toEqual(100);
  });

  it("should allow a user to see available funds", function() {
    bank.deposit(10)
    expect(bank.displayBalance).toEqual(10)
  })

  it("should be able to have money withdrawn", function() {
    bank.deposit(100);
    bank.withdraw(20);
    expect(bank.displayBalance).toEqual(80);
  })
});
