import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIRoutesEnum } from "../../types/Enums";
import { REQUEST_QNT } from "../../utils/const";
import {
	currentLaunchAdapter, eventAdapter, launchAdapter
} from "./adapter";
import type {
	CurrentLaunchAdapterType, EventAdapterType, LaunchAdapterType
} from "./adapter.types";
import {
	CurrentLaunch, EventData, LaunchData
} from "./adapter.types";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export interface LaunchesTransformResponse {
	launches: LaunchAdapterType[],
	totalQnt: number
}

export const spacelaunchesSlice = createApi({
	reducerPath: "spacelaunchesSlice",
	baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
	endpoints: (builder) => ({
		getEvents: builder.query<EventAdapterType[], void>({
			query: () => APIRoutesEnum.EVENTS,
			transformResponse: (response: EventData) => {
				return response.results.map((item) => eventAdapter(item));
			}
		}),
		getLaunches: builder.query<LaunchesTransformResponse, number>({
			query: (offsetNumber = 0) =>
				`${APIRoutesEnum.LAUNCHES}?limit=${REQUEST_QNT}&mode=detailed&offset=${offsetNumber}`, // eslint-disable-line
			transformResponse: (response: LaunchData) => {
				return {
					launches: response.results.map((item) => launchAdapter(item)),
					totalQnt: response.count
				};
			}
		}),
		getCurrentLaunche: builder.query<CurrentLaunchAdapterType, string>({
			query: (id) => `launch/${id}`,
			transformResponse: (response: CurrentLaunch) => currentLaunchAdapter(response)
		}),
	}),
});

export const { useGetLaunchesQuery,
	useGetEventsQuery,
	useGetCurrentLauncheQuery } = spacelaunchesSlice;
