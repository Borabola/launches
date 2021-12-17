import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLaunchList, getCurrentLaunch } from "services/launch";
import {launchAdapter, currentLaunchAdapter} from "utils/adapter";
import {showToast, showServerDetail} from "utils/toastHelper";


export const fetchLaunchList = createAsyncThunk(
	"launch/fetchLaunchesList",
	async (
		_, { rejectWithValue }
	) => {
		try {
			const response = await getLaunchList();
			if (response.status < 200 && response.status >= 300) {	
				throw new Error("Server Error!");
			}
			
			return response.data.results.map((item) => launchAdapter(item));

		} catch (error) {
			showToast();
			showServerDetail(error.response.data.detail);
			return rejectWithValue(error.response.data.error);
		}
	}
);

export const fetchCurrentLaunch = createAsyncThunk(
	"launch/fetchCurrentLaunch",
	async (
		id, { rejectWithValue }
	) => {
		try {
			const response = await getCurrentLaunch(id);
			//if (!response.status === 200) {
			if (response.status < 200 && response.status >= 300) {		
				throw new Error("Server Error!");
			}
			
			const result = currentLaunchAdapter(response.data);

			return result;
		} catch (error) {
			showToast();
			showServerDetail(error.response.data.detail);
			return rejectWithValue(error.response.data.error);
		}
	}
);