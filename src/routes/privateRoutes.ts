import { lazy } from "react";
import { AppRoute } from "../utils/const";

const LaunchPage = lazy(() => import("../pages/LaunchPage/"));
const AddProductPage = lazy(() => import("../pages/AddProductPage"));
const Dashboard = lazy(() => import("../pages/Dashboard"));

export const privateRoutes = [
	{
		component: LaunchPage,
		path: AppRoute.LAUNCH,
		exact: true,
		isAuth: true
	},
	{
		component: AddProductPage,
		path: AppRoute.ADDPRODUCT_PAGE,
		exact: true,
		isAuth: true
	},
	{
		component: Dashboard,
		path: AppRoute.DASHBOARD,
		exact: true,
		isAuth: true
	},
];
