import {
  ADD_QUOTES,
  START_LOADING_DATA,
  END_LOADING_DATA,
  FETCH_ERROR
} from "../actions/constants";
import { QuoteReducerProps } from "../quoteTypes";

const initialState: Partial<QuoteReducerProps>  = {
  quotes: undefined,
  loading: false,
  error: null,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const quoteReducer: any = (
  state = initialState,
  action: QuoteReducerProps
) => {
  switch (action.type) {
    case ADD_QUOTES:
      return typeof state === "object" && {
        ...state,
        quotes: action.quotes[0],
        loading: true,
        error: null,
      };
    case START_LOADING_DATA:
      return (
        typeof state === "object" && { ...state, loading: true }
      );
    case END_LOADING_DATA:
      return (
        typeof state === "object" && { ...state, loading: false }
      );
    case FETCH_ERROR:
      return { error: action.error }
    default:
      return state
  }
};

export default quoteReducer;
