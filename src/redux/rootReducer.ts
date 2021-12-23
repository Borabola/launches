import {combineReducers} from "redux";
//import eventSlice from "./eventData/sliceReducer";
import { eventSlice } from "../services/api";
import launchSlice from "./launchData/sliceReducer";
import authSlice from "./auth/sliceReducer";

export default combineReducers({
	//event: eventSlice.reducer,
	[eventSlice.reducerPath]: eventSlice.reducer,
	launch: launchSlice,
	auth: authSlice,
});