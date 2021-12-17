import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentRocket } from "services/rocket";
import {rocketAdapter} from "utils/adapter";
import {showToast, showServerDetail} from "utils/toastHelper";



export const fetchCurrentRocket = createAsyncThunk(
	"rocket/fetchCurrentRocket",
	async (
		id, { rejectWithValue }
	) => {
		try {
			const response = await getCurrentRocket(id);
			if (response.status < 200 && response.status >= 300) {
				throw new Error("Server Error!");
			}

			return rocketAdapter(response.data);

		} catch (error) {
			showToast();
			showServerDetail(error.response.data.detail);
			return rejectWithValue(error.response.data.error);
		}
	}
);