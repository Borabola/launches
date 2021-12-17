import { createSlice } from "@reduxjs/toolkit";
import { fetchLaunchList, fetchCurrentLaunch } from "./fetches";

const initialState = {
	currentLaunch: {},
	isLaunchesLoaded: false,
	isCurrentLaunch: false,
	launches: [],
	launchError: null,
	launchStatus: null,
	launchCurrentStatus: null,
	launchCurrentError: null,
};

const launchSlice = createSlice({
	name: "launch",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchLaunchList.pending]: (state) => {
			state.launchStatus = "loading";
			state.launchError = null;
		},
		[fetchLaunchList.fulfilled]: (
			state, action
		) => {
			state.launchStatus = "resolved";
			state.launches = action.payload;
			state.isLaunchesLoaded = true;
		},
		[fetchLaunchList.rejected]: (
			state, action
		) => {
			state.launchStatus = "rejected";
			state.launchError = action.error;
			state.isLaunchesLoaded = false;
		},

		[fetchCurrentLaunch.pending]: (state) => {
			state.launchCurrentStatus = "loading";
			state.launchCurrentError = null;
		},
		[fetchCurrentLaunch.fulfilled]: (
			state, action
		) => {
			state.launchCurrentStatus = "resolved";
			state.currentLaunch = action.payload;
			state.isCurrentLaunch = true;
		},
		[fetchCurrentLaunch.rejected]: (
			state, action
		) => {
			state.launchCurrentStatus = "rejected";
			state.launchCurrentError = action.payload;
			state.isCurrentLaunch = false;
		},
	},
});

export default launchSlice.reducer;
