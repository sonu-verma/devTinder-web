import { createSlice } from "@reduxjs/toolkit";

const teamSlice = createSlice({
    name: "teams",
    initialState: null,
    reducers: {
        teamsData: (state, action) => {
            return action.payload
        },
        removeTeamData: () => {
            return null;
        }
    }
})


export const { teamsData, removeTeamData } = teamSlice.actions;
export default teamSlice.reducer