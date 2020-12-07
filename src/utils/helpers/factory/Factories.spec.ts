import Quote from "../../../models/Quote";

import Factory from "./Factories";

describe("Factories", () => {
  test("builds Quote object with correct data", () => {
    const {
      aprFormatted,
      lenderName,
      loanType,
      interestRate,
      closingCosts,
      monthlyPayment,
      apr,
      interestRateFormatted,
      monthlyPaymentFormatted,
    }: Quote = Factory.build("RateQuote");

    expect(lenderName).toEqual("TFB Federal Credit Union");
    expect(loanType).toEqual("7/1 ARM");
    expect(interestRate).toEqual(3.375);
    expect(closingCosts).toEqual(5500);
    expect(monthlyPayment).toEqual(1989.4329462037347);
    expect(apr).toEqual(3.472295213050529);
    expect(interestRateFormatted).toEqual("3.375%");
    expect(monthlyPaymentFormatted).toEqual("$1,989");
    expect(aprFormatted).toEqual("3.472%");
  });
});

