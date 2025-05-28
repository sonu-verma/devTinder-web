import { createSlice } from "@reduxjs/toolkit";

const turfSlice = createSlice({
    name: "turfs",
    initialState: null,
    reducers: {
        turfData: (state, action) => {
            return action.payload
        }

    }
})



export const  {turfData} = turfSlice.actions
export default turfSlice.reducer