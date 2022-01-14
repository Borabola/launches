import {
	ElementType, FC, lazy
} from "react";
import { AppRoute } from "../utils/const";

// Common routes with using React code splitting approach

const Main = lazy(() => import("../pages/Main"));
const RocketPage = lazy(() => import("../pages/RocketPage"));
const LoginPage = lazy(() => import("../pages/Login"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const NotFound = lazy(() => import("../pages/NotFound"));

export type RouteItem = typeof commonRoutes[0];

type Concrete<Type> = {
	[Property in keyof Type]-?: Type[Property];
};

export type OmitedRouteItem = Omit<Concrete<RouteItem>, "component">;
export type ModifiedRouteItem = OmitedRouteItem & {
	component: React.LazyExoticComponent<FC<unknown>> | ElementType
};

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
		component: RegisterPage,
		path: "/register",
		exact: true,
		isAuth: false
	},
	{
		component: NotFound,
	},
];
