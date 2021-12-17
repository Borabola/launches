import { axiosInstance } from "../api";
import { APIRoute } from "../../utils/const";
import { EventData } from "utils/adapter.types";
import { AxiosResponse } from "axios";

export const getEventList = () => {
	return axiosInstance.get<never, AxiosResponse<EventData>>(APIRoute.EVENTS);
};