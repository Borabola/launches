import { axiosInstance } from "../api";

export const getCurrentRocket = (id:string) => {
	return axiosInstance.get(`cofig/launcher/${id}`);
};