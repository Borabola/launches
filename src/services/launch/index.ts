import { axiosInstance } from "../api";
import { APIRoute } from "../../utils/const";
import { AxiosResponse } from "axios";
import { LaunchData, CurrentLaunch } from "utils/adapter.types";

export const getLaunchList = () => {
	return axiosInstance.get<never, AxiosResponse<LaunchData>>(APIRoute.LAUNCHES);
};

export const getCurrentLaunch = (id:string) => {
	return axiosInstance.get<never, AxiosResponse<CurrentLaunch>>(`launch/${id}`);
};
