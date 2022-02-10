//import { createEntityAdapter } from "@reduxjs/toolkit";
import { rest } from "msw";
import { APIRoutesEnum } from "../types/Enums";
import {
	mockCurrentLaunch, mockEvents, mockLaunches
} from "./mockData";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const handlers = [
	rest.get(
		`${BACKEND_URL}${APIRoutesEnum.EVENTS}`,
		(
			req, res, ctx
		) => {
			return res(ctx.json(mockEvents));
		}
	),
	rest.get(
		`${BACKEND_URL}${APIRoutesEnum.LAUNCHES}`,
		(
			req, res, ctx
		) => {
			return res(ctx.json(mockLaunches));
		}
	),

	//test with undefined id of launch, with is used in test rendering //useGetCurrentLauncheQuery(undefined)
	rest.get(
		`${BACKEND_URL}launch/undefined`,
		(
			req, res, ctx
		) => {
			//const { id } = req.params as { id: string };
			return res(ctx.json(mockCurrentLaunch));
		}
	),
];
