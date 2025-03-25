import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const initalState = {
  cart: [],
  totalPrice: 0,
  totalAmount: 0,
};

const reducter = (state, action) => {
  const { type, payloud } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        crat: [...state.cart, payloud],
      };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const { state, dispatch } = useReducer(reducter, initalState);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
