import { Factory } from "rosie";

Factory.define("RateQuote").attrs({
  lenderName: "TFB Federal Credit Union",
  loanType: "7/1 ARM",
  interestRate: 3.375,
  closingCosts: 5500,
  monthlyPayment: 1989.4329462037347,
  apr: 3.472295213050529,
  interestRateFormatted: "3.375%",
  monthlyPaymentFormatted: "$1,989",
  aprFormatted: "3.472%",
});

export default Factory;
