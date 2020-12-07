import React from "react";

import { cleanup, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux"
import thunk from "redux-thunk";

import { Action } from "../../actions/quotes";
import quoteReducer from "../../reducers/quotes";

import RateQuoteUI from "./RateQuoteUI";

// Create a HOC to render components with redux 
const renderWithRedux = (
  component: React.ReactNode,
  { store = createStore(quoteReducer) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe("RateQuoteUI", () => {
  afterEach(cleanup);
  
  test("renders app correctly", async () => {
    const { container } =
      renderWithRedux(<RateQuoteUI />
      );
    expect(container).toMatchSnapshot();
  });

  it("passes through an action", () => {
    const create = () => {
      const store = {
        getState: jest.fn(() => ({})),
        dispatch: jest.fn()
      }
      const next = jest.fn()
      const invoke = (action: Action) => thunk(store)(next)(action)

      return { store, next, invoke }
    }
    const { next, invoke } = create()
    const action: Action = { type: "START_LOADING_DATA", loading: true }
    invoke(action)
    expect(next).toHaveBeenCalledWith(action)
  });
})