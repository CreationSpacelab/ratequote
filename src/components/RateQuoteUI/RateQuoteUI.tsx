import React from "react";

import { useSelector, useDispatch } from "react-redux"

import { initiateAddQuotes } from "../../actions/quotes";
import { QuoteReducerProps, QuoteType, RateQuoteUIProps } from "../../quoteTypes";
import { ErrorMessage } from "../forms/FormStyles";
import { RateQuoteForm } from "../forms/RateQuoteForm";
import RateQuote from "../RateQuote";
import { LenderName, Column, TableHeaderRow } from "../RateQuote/RateQuoteStyles";

import { Container, Loader, Wrapper } from "./RateQuoteUIStyles";

export const DEFAULT_FORM_VALUE = {
  "loanSize": "450000",
  "creditScore": "680",
  "propertyType": "SingleFamily",
  "occupancy": "Primary"
}

const RateQuoteUI = () => {
  const dispatch = useDispatch()

  // Map state to props from redux using useSelector hook
  const quotes = useSelector((state: QuoteReducerProps) => state)

  const quotesPresent = quotes.quotes

  const handleSubmit = async (values: RateQuoteUIProps) => {
    dispatch(initiateAddQuotes(values))
  }

  // Sort quotes in descending order based on closingCosts
  const sortedQuotesDsc = quotes.quotes !== undefined &&
    quotes.quotes.sort((a, b) => a.closingCosts - b.closingCosts).reverse()

  return (
    <Wrapper>
      <RateQuoteForm setFormData={handleSubmit} />
      <Container>
        <TableHeader />
        {/* Map rate quotes to an array of RateQuote elements */}
        {quotesPresent ? !quotes.loading ? (
          <>
            {quotesPresent.length > 1 ? (
              Object.entries(sortedQuotesDsc).map(([k, quote]: [string, QuoteType]) => {
                return <RateQuote key={k} quote={quote} />
              })) : <ErrorMessageDisplay />}
          </>
        ) : (
            <Loader />
          ) :
          <ErrorMessage style={{ position: "absolute", left: "50%", transform: "translateX(-50%)"}}>
            <h3>Try a new search</h3>
          </ErrorMessage>
        }
      </Container>
    </Wrapper>
  );
};

/* wrapped in a memo() so it will only re-render when its props change. 
Each time the randomProp in RateQuote changes, mapStateToProps 
will be re-calculated */
export default React.memo(RateQuoteUI);

export const TableHeader: React.FC = () =>
  <TableHeaderRow>
    <LenderName data-testid="lenderName">Lender</LenderName>
    <Column data-testid="loanType">Product</Column>
    <Column data-testid="interestRateFormatted">Rate</Column>
    <Column data-testid="closingCosts">Closing <br /> Costs</Column>
    <Column data-testid="monthlyPaymentFormatted">Monthly Payment</Column>
    <Column data-testid="aprFormatted">APR</Column>
  </TableHeaderRow>

export const ErrorMessageDisplay: React.FC = () =>
  <ErrorMessage>
    <h3>Whoops!</h3>
    <h2>No results found.</h2>
    <p>Please try a different serach</p>
  </ErrorMessage>
