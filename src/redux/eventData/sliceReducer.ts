import { createSlice } from "@reduxjs/toolkit";
import { fetchEventList } from "./fetches";
import { EventState } from "./eventData.types";

const initialState: EventState = {
	events: [],
	eventError: null,
	//currentEvent: {},
	isEventsLoaded: false,
	//isCurrentEvent: false,
	eventStatus: null,
};

const eventSlice = createSlice({
	name: "event",
	initialState,
	reducers: {},
	
	extraReducers: builder => {
		builder.addCase(
			fetchEventList.pending,
			(state:EventState) => {
				state.eventStatus = "loading";
				state.eventError = null;
			}
		);
		builder.addCase(
			fetchEventList.fulfilled,
			(
				state:EventState, action
			) => {
				state.eventStatus= "resolved";
				state.events = action.payload;
				state.isEventsLoaded = true;
			}
		);
		builder.addCase(
			fetchEventList.rejected,
			(
				state, action
			) => {
				state.eventStatus = "rejected";
				state.eventError = action.payload;
				state.isEventsLoaded = false;
			}
		);
	}
});

export default eventSlice.reducer;