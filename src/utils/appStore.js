import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import teamReducer from "./teamSlice";
import turfReducer from "./turfSlice";

export const appStore  = configureStore({
    reducer: {
        user: userReducer,
        teams: teamReducer,
        turfs: turfReducer,
    }
})