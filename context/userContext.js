import React, { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
    user: null,
    token: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            };
        default:
            return state;
    }
};

 export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};
