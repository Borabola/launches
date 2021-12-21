import { createSlice } from "@reduxjs/toolkit";
import { fetchLaunchList, fetchCurrentLaunch } from "./fetches";
import { LaunchState } from "./launchData.types";


const initialState: LaunchState = {
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
	extraReducers: builder => {
		builder.addCase(
			fetchLaunchList.pending,
			(state: LaunchState) => {
				state.launchStatus = "loading";
				state.launchError = null;
			},
		);
		builder.addCase(
			fetchLaunchList.fulfilled,
			(
				state: LaunchState, action
			) => {
				state.launchStatus = "resolved";
				state.launches = action.payload;
				state.isLaunchesLoaded = true;
			}
		);
		builder.addCase(
			fetchLaunchList.rejected,
			(
				state: LaunchState, action
			) => {
				state.launchStatus = "rejected";
				state.launchError = action.error;
				state.isLaunchesLoaded = false;
			}
		);

		builder.addCase(
			fetchCurrentLaunch.pending,
			(state: LaunchState) => {
				state.launchCurrentStatus = "loading";
				state.launchCurrentError = null;
			}
		);
		builder.addCase(
			fetchCurrentLaunch.fulfilled, 
			(
				state: LaunchState, action
			) => {
				state.launchCurrentStatus = "resolved";
				state.currentLaunch = action.payload;
				state.isCurrentLaunch = true;
			}
		);
		builder.addCase(
			fetchCurrentLaunch.rejected,
			(
				state: LaunchState, action
			) => {
				state.launchCurrentStatus = "rejected";
				state.launchCurrentError = action.payload;
				state.isCurrentLaunch = false;
			}
		);
	},
});

export default launchSlice.reducer;
