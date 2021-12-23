import {combineReducers} from "redux";
import {
	eventSlice, launchCurrentSlice, launchSlice 
} from "../services/api";
import authSlice from "./auth/sliceReducer";

export default combineReducers({
	[eventSlice.reducerPath]: eventSlice.reducer,
	[launchSlice.reducerPath]: launchSlice.reducer,
	[launchCurrentSlice.reducerPath]: launchCurrentSlice.reducer,
	auth: authSlice,
});