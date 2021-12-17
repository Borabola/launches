import axios, { AxiosError, AxiosResponse } from "axios";
import { Axios } from "axios";
import { AxiosInstance } from "axios";

//import Axios from "axios/lib/core";
//let Axios = require("./core/Axios");

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