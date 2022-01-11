import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
	CurrentLaunchAdapterType, EventAdapterType, LaunchAdapterType
} from "../utils/adapter";
import {
	currentLaunchAdapter, eventAdapter, launchAdapter
} from "../utils/adapter";
import {
	CurrentLaunch, EventData, LaunchData
} from "../utils/adapter.types";
import { APIRoutesEnum, REQUEST_QNT } from "../utils/const";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

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
		getLaunches: builder.query<LaunchAdapterType[], number>({
			query: (offsetNumber = 0) =>
				`APIRoutesEnum.LAUNCHES?limit=${REQUEST_QNT}&mode=detailed&offset=${offsetNumber}`,
			transformResponse: (response: LaunchData) => {
				return response.results.map((item) => launchAdapter(item));

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
