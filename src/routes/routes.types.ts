import {FC, LazyExoticComponent } from "react";

export type PrivatRoutesItem = {
	component: LazyExoticComponent<FC<Record<string, unknown>>>,
	isAuth: true,
	path: string,
	exact?: boolean,
};

export type RoutesItem = {
	component: LazyExoticComponent<FC<Record<string, unknown>>>,
	isAuth?: false,
	path?: string,
	exact?: boolean,

};
export type PrivatRoutes = PrivatRoutesItem[];
export type Routes = RoutesItem[];
