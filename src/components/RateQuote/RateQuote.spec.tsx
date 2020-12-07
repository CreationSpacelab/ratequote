import React from "react";

import { render } from "@testing-library/react";

import Quote from "../../models/Quote";
import Factories from "../../utils/helpers/factory/Factories"

import RateQuote from "./RateQuote";

const baseQuote: Quote = Factories.build("RateQuote")

describe("RateQuote", () =>{

  test("renders app correctly", () => {
    const { container } = render(<RateQuote quote={baseQuote} />);
    expect(container).toMatchSnapshot()
  });

  test("displays the interest rate formatted", () => {
    const { getByText } = render(<RateQuote quote={baseQuote} />);
    getByText("3.375%", { exact: false })
  });

  test("displays the monthly payment formatted", () => {
    const { getByText } = render(<RateQuote quote={baseQuote} />);
    getByText("$1,989", { exact: false })
  });

  test("displays the apr formatted", () => {
    const { getByText } = render(<RateQuote quote={baseQuote} />);
    getByText("3.472%", {exact: false})
  });
})
