import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        userData: (state, action) => {
            return action.payload
        },
        clearUserData: () => {
            document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            return null
        }
    }
})


export const { userData, clearUserData } = userSlice.actions;
export default userSlice.reducer;