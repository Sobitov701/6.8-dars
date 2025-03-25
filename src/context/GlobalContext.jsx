import { createContext, useReducer, useEffect } from "react";

export const GlobalContext = createContext();

const getLocalStorage = () => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : { cart: [], totalPrice: 0 };
};

const initialState = getLocalStorage();

const reducer = (state, action) => {
  const { type, payload } = action;

  let updatedCart;
  switch (type) {
    case "ADD_TO_CART":
      updatedCart = [...state.cart, { ...payload, amount: 1 }];
      break;

    case "INCREMENT":
      updatedCart = state.cart.map((item) =>
        item.id === payload ? { ...item, amount: item.amount + 1 } : item
      );
      break;

    case "DECREMENT":
      updatedCart = state.cart
        .map((item) =>
          item.id === payload ? { ...item, amount: item.amount - 1 } : item
        )
        .filter((item) => item.amount > 0);
      break;

    case "REMOVE_FROM_CART":
      updatedCart = state.cart.filter((item) => item.id !== payload);
      break;

    default:
      return state;
  }

  const totalPrice = updatedCart.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );

  const newState = {
    cart: updatedCart,
    totalPrice,
  };

  localStorage.setItem("cart", JSON.stringify(newState));
  return newState;
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
