import { combineReducers } from "redux";
import { spacelaunchesSlice } from "../services/api";
import authSlice from "./auth/sliceReducer";


export default combineReducers({
	[spacelaunchesSlice.reducerPath]: spacelaunchesSlice.reducer,
	auth: authSlice,
});
