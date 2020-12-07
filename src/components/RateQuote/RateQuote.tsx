import React from "react";

import Quote from "../../models/Quote";
import { QuoteType } from "../../quoteTypes";

import { Column, RateQuoteRow, LenderName, ToolTip } from "./RateQuoteStyles";

const LENDER_CHAR_LIMIT = 13

interface RateQuoteProps {
  quote: QuoteType
}

const RateQuote: React.FC<RateQuoteProps> = ({ quote }: RateQuoteProps) => {
  const rateQuote = new Quote(quote);

  // Limit the amount of lenderName characters displayed
  const lenderName: string = rateQuote.lenderName.length > LENDER_CHAR_LIMIT
    ? `${rateQuote.lenderName.substring(0, LENDER_CHAR_LIMIT)}...`
    : rateQuote.lenderName

  return (
    <>
      <RateQuoteRow>
        <LenderName data-testid="lenderName">
          <ToolTip>
            {lenderName}
            <div>{rateQuote.lenderName}</div>
          </ToolTip>
        </LenderName>
        <Column data-testid="loanType">{rateQuote.loanType}</Column>
        <Column data-testid="interestRateFormatted">{rateQuote.interestRateFormatted()}</Column>
        <Column data-testid="closingCosts">{rateQuote.closingCostsFormatted()}</Column>
        <Column data-testid="monthlyPaymentFormatted">{rateQuote.monthlyPaymentFormatted()}</Column>
        <Column data-testid="aprFormatted">{rateQuote.aprFormatted()}</Column>
      </RateQuoteRow>
    </>
  );
};

export default React.memo(RateQuote)

