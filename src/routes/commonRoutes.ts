import { lazy } from "react";
import { AppRouteEnum } from "../types/Enums";
import type {Routes} from "./routes.types";

// Common routes with using React code splitting approach

const Main = lazy(() => import("../pages/MainPage"));
const RocketPage = lazy(() => import("../pages/RocketPage"));
const LoginPage = lazy(() => import("../pages/Login"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const commonRoutes: Routes = [
	{
		component: Main,
		path: AppRouteEnum.ROOT,
		exact: true,
		isAuth: false
	},
	{
		component: RocketPage,
		path: AppRouteEnum.ROCKET,
		exact: true,
		isAuth: false
	},
	{
		component: LoginPage,
		path: AppRouteEnum.LOGIN,
		exact: true,
		isAuth: false
	},
	{
		component: RegisterPage,
		path: AppRouteEnum.SIGNIN,
		exact: true,
		isAuth: false
	},
	{
		component: NotFound,
	},
];
