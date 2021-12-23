import axios from "axios";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APIRoute } from "../utils/const";
//import {eventAdapter} from "utils/adapter";
//import type { EventResult } from "utils/adapter.types";
import { EventData } from "utils/adapter.types";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


const axiosInstance = axios.create({
	method: "get",
	baseURL: BACKEND_URL,
	timeout: 15000,
	responseType: "json",
	maxContentLength: 2000,
	validateStatus: (status:number) => status >= 200 && status < 300,
	maxRedirects: 5,
});

const onFulfilled = <T=unknown>(value: T):T => value;

const onRejected = <T=unknown>(err: T):T => {
	//const { response } = err;
	throw err;
};

axiosInstance.interceptors.response.use(
	onFulfilled,
	onRejected
);
export { axiosInstance };





//type EventsResult = ReturnType<typeof eventAdapter>[];

/*export interface Adapter {
	(config: RequestConfig): Promise<any>;
}

  type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";  

interface RequestConfig<T = any> {
	adapter?: Adapter;
	baseURL?: string;
	data?: T;
	headers?: Record<string, string>;
	maxBodyLength?: number;
	maxContentLength: number;
	maxRedirects: number;
	method: "get" | "post" | "delete";
	responseType?: ResponseType;
	timeout?: number;
	url: "string";	
}
interface Response<T = never> {
	//data: T;
	status: number;
	statusText: string;
	headers: Record<string, string>;
	config: RequestConfig<T>;
	request?: any;
}

interface EventResponse extends Response {
	data: EventData;
} */

// Define a service using a base URL and expected endpoints
export const eventSlice = createApi({
	reducerPath: "eventSlice",
	baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
	endpoints: (builder) => ({
		getEvents: builder.query<EventData, void>({
			query: () => APIRoute.EVENTS,
			/*transformResponse: (response: EventData) => {
				return response.results.map((item) => eventAdapter(item));

			}*/
		}),
	}),
});

export const { useGetEventsQuery } = eventSlice;