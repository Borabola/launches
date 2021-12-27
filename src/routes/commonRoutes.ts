import { lazy } from "react";
import { AppRoute } from "../utils/const";

// Common routes with using React code splitting approach

const Main = lazy(() => import("../pages/Main"));
const RocketPage = lazy(() => import("../pages/RocketPage"));
const LoginPage = lazy(() => import("../pages/Login"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const commonRoutes = [
	{
		component: Main,
		path: AppRoute.ROOT,
		exact: true,
		isAuth: false
	},
	{
		component: RocketPage,
		path: AppRoute.ROCKET,
		exact: true,
		isAuth: false
	},
	{
		component: LoginPage,
		path: "/login",
		exact: true,
		isAuth: false
	},
	{
		component: NotFound,
	},
];
