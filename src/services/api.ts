import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIRoute } from "../utils/const";
import {
	eventAdapter, launchAdapter, currentLaunchAdapter
} from "../utils/adapter";
import {
	EventData, LaunchData, CurrentLaunch 
} from "../utils/adapter.types";
import type {
	EventAdapterType, LaunchAdapterType, CurrentLaunchAdapterType 
} from "../utils/adapter";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


// Define a service using a base URL and expected endpoints
export const eventSlice = createApi({
	reducerPath: "eventSlice",
	baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
	endpoints: (builder) => ({
		getEvents: builder.query<EventAdapterType[], void>({
			query: () => APIRoute.EVENTS,
			transformResponse: (response: EventData) => {
				return response.results.map((item) => eventAdapter(item));

			}
		}),
	}),
});

export const launchSlice = createApi({
	reducerPath: "launchSlice",
	baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
	endpoints: (builder) => ({
		getLaunches: builder.query<LaunchAdapterType[], void>({
			query: () => APIRoute.LAUNCHES,
			transformResponse: (response: LaunchData) => {
				return response.results.map((item) => launchAdapter(item));

			}
		}),
	}),
});

export const launchCurrentSlice = createApi({
	reducerPath: "launchCurrentSlice",
	baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
	endpoints: (builder) => ({
		getCurrentLaunche: builder.query<CurrentLaunchAdapterType, string>({
			query: (id) => `launch/${id}`,
			transformResponse: (response: CurrentLaunch) => currentLaunchAdapter(response)
		}),
	}),
});

export const { useGetEventsQuery } = eventSlice;
export const { useGetLaunchesQuery } = launchSlice;
export const { useGetCurrentLauncheQuery } = launchCurrentSlice;