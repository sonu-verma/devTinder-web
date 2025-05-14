import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import teamReducer from "./teamSlice";

export const appStore  = configureStore({
    reducer: {
        user: userReducer,
        teams: teamReducer
    }
})