import React from "react";

import ReactDOM from "react-dom";
import { Provider } from "react-redux"

import { GlobalStyles } from "./components/core/globalStyles";
import RateQuoteUI from "./components/RateQuoteUI/RateQuoteUI";
import reportWebVitals from "./reportWebVitals";
import store from "./store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <RateQuoteUI />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
