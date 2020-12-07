import currency from "currency.js";

import { QuoteType } from "../quoteTypes";
/**
 *  @class Quote
 *  @property {Function} interestRateFormatted
 *  @property {Function} monthlyPaymentFormatted
 *  @property {Function} aprFormatted
 */
class Quote {
  /** Member variables */
  lenderName: string;
  loanType: string;
  interestRate: number;
  closingCosts: number;
  monthlyPayment: number;
  apr: number;

  /**
   * Construct a Quote of type QuoteType.
   * @param {Object} payload
   * @typedef {Object} QuoteType
   */
  constructor(payload: QuoteType) {
    this.lenderName = payload.lenderName;
    this.loanType = payload.loanType;
    this.interestRate = payload.interestRate;
    this.closingCosts = payload.closingCosts;
    this.monthlyPayment = payload.monthlyPayment;
    this.apr = payload.apr;
  }

  /**
   * Format the 'interestRate' data to 2 decimal points.
   * @return {string} interestRate formatted to String.
   */
  interestRateFormatted(): string {
    return `${this.interestRate.toFixed(3)}%`;
  }

  /**
   * Format the 'monthlyPayment' data to 2 decimal points.
   * @return {string} monthlyPayment formatted to String.
   */
  closingCostsFormatted(): string {
    return currency(Math.round(this.closingCosts), {
      fromCents: false,
      precision: 0,
    }).format();
  }
  /**
   * Format the 'monthlyPayment' data to 2 decimal points.
   * @return {string} monthlyPayment formatted to String.
   */
  monthlyPaymentFormatted(): string {
    return currency(Math.round(this.monthlyPayment), {
      fromCents: false,
      precision: 0,
    }).format();
  }

  /**
   * Format the 'apr' data to 2 decimal points.
   * @return {string} apr formatted to String.
   */
  aprFormatted(): string {
    return `${this.apr.toFixed(3)}%`;
  }
}

export default Quote;
