import { createSlice } from "@reduxjs/toolkit";
import {fetchCurrentRocket} from "./fetches";

const initialState = {
	currentRocket: {},
	isCurrentRocket: false,
	roketCurrentStatus: null,
	roketCurrentError: null,
};

const rocketSlice = createSlice({
	name: "rocket",
	initialState,
	reducers: {},
	[fetchCurrentRocket.pending]: (state) => {
		state.launchCurrentStatus = "loading";
		state.launchCurrentError = null;
	},
	[fetchCurrentRocket.fulfilled]: (
		state, action
	) => {
		state.launchCurrentStatus = "resolved";
		state.currentLaunch = action.payload;
		state.isCurrentLaunch = true;
	},
	[fetchCurrentRocket.rejected]: (
		state, action
	) => {
		state.launchCurrentStatus = "rejected";
		state.launchCurrentError = action.payload;
		state.isCurrentLaunch = false;
	},
});

export default rocketSlice.reducer;