import { ThunkDispatch } from "redux-thunk";

import { QuoteType, RateQuoteUIProps } from "../../src/quoteTypes";
import config from "../config";

import {
  ADD_QUOTES,
  FETCH_ERROR,
  START_LOADING_DATA,
  END_LOADING_DATA,
} from "./constants";

export const initiateAddQuotes: (
  params: RateQuoteUIProps
) => (
  dispatch: ThunkDispatch<QuoteType, void, Action>
) => Promise<QuoteType> = (params: RateQuoteUIProps) => {
  // Create a params for fetch url
  const fetchParams = Object.entries(params)
    .map(([k, v]) => {
      // Convert the loan size value to unformatted string
      if (k === "loanSize") return `${k}=${v.split(",").join("")}`;
      return `${k}=${v}`;
    })
    .join("&");

  // Add fetch headers and fetch method
  const fetchConfig = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: config.API_KEY,
    },
  };

  return async (dispatch: ThunkDispatch<QuoteType, void, Action>) => {
    /* To improve user engagement, loader is active while fetching data. Once the data is retrieved,
      the loader will change to inactive.
    */
    try {
      dispatch(startLoading());
      await fetch(
        `https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes?${fetchParams}`,
        fetchConfig
      )
        .then((response: Response) => response.json())
        .then((res: { rateQuotes: QuoteType[] }) => {
          // Dispatch the quotes to the redux store
          return dispatch(addQuotes([res.rateQuotes]));
        });
    } catch (error) {
      dispatch(fetchError(error));
      return error;
    }
    // Once data is retrieved end loading
    setTimeout(() => {
      dispatch(endLoading());
    }, 2000);
  };
};

// Setting the type of any object and hint to the compiler about immutability.
export const addQuotes = (quotes: QuoteType[][]) => {
  return <const>{
    type: ADD_QUOTES,
    quotes,
  };
};

export const fetchError = (e: string) => {
  return <const>{
    type: FETCH_ERROR,
    error: e,
  };
};

export const startLoading = () => {
  return <const>{
    type: START_LOADING_DATA,
    loading: true,
  };
};

export const endLoading = () => {
  return <const>{
    type: END_LOADING_DATA,
    loading: false,
  };
};

export type Action = ReturnType<
  typeof addQuotes | typeof fetchError | typeof startLoading | typeof endLoading
>;
