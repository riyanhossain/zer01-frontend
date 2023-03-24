import React, { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
    user: null,
    token: null,
    currentTab: "active",
    xlsx: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            };

        case "LOGOUT":
            return {
                ...state,
                user: null,
                token: null,
            };
        case "SET_CURRENT_TAB":
            return {
                ...state,
                currentTab: action.payload,
            };

        case "SET_XLSX":
            return {
                ...state,
                xlsx: action.payload,
            };

        default:
            return state;
    }
};

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};
