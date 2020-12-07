import { compose, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import quoteReducer from "./reducers/quotes";

/* Creating store with thunk middleware and redux dev tools. */ 
const store = createStore(
  quoteReducer,
  compose(composeWithDevTools(applyMiddleware(thunk)))
);

export default store;
