import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLaunchList, getCurrentLaunch } from "../../services/launch";
import {launchAdapter, currentLaunchAdapter} from "../../utils/adapter";
import {showToast, showServerDetail} from "../../utils/toastHelper";
import type { LaunchResult } from "../../utils/adapter.types";
import type { ErrorReceived } from "../types/redux.types";
import { IThunkApi } from "redux/store";


export const fetchLaunchList = createAsyncThunk<
ReturnType<typeof launchAdapter>[], // return type
never, // args type
IThunkApi // thunkAPI type
>(
	"launch/fetchLaunchesList",
	async (
		_, { rejectWithValue }
	) => {
		try {
			const response = await getLaunchList();
			if (response.status < 200 && response.status >= 300) {	
				throw new Error("Server Error!");
			}
			
			return response?.data?.results.map((item: LaunchResult) => launchAdapter(item));

		} catch (error) {
			const _error = error as ErrorReceived;
			showToast();
			showServerDetail(_error?.response?.data.detail);
			return rejectWithValue(_error?.response?.data.error);
		}
	}
);

export const fetchCurrentLaunch = createAsyncThunk<
ReturnType<typeof currentLaunchAdapter>, // return type
string, // args type
IThunkApi // thunkAPI type
>(
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
			const _error = error as ErrorReceived;
			showToast();
			showServerDetail(_error?.response?.data.detail);
			return rejectWithValue(_error?.response?.data.error);
		}
	}
);