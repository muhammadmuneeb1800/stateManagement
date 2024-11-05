import React, { useState, createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  isAuth: false,
  user: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return { isAuth: true, user: { firstName: "Muhammad" } };
    case "SET_LOGGED_OUT":
      return initialState;
    default:
      return state;
  }
};
export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [firstName, setFirstName] = useState("");
  //   const [isAuth, setIsAuth] = useState(0);
  return (
    <>
      <AuthContext.Provider value={{ ...state, dispatch }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
