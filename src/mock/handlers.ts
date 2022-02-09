//import { createEntityAdapter } from "@reduxjs/toolkit";
import { rest } from "msw";
import { APIRoutesEnum } from "../types/Enums";
import {
	testCurrentLaunch, testEvents, testLaunches
} from "./mockData";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const handlers = [
	rest.get(
		`${BACKEND_URL}${APIRoutesEnum.EVENTS}`,
		(
			req, res, ctx
		) => {
			return res(ctx.json(testEvents));
		}
	),
	rest.get(
		`${BACKEND_URL}${APIRoutesEnum.LAUNCHES}`,
		(
			req, res, ctx
		) => {
			return res(ctx.json(testLaunches));
		}
	),
	rest.get(
		`${BACKEND_URL}/launch/testId`,
		(
			req, res, ctx
		) => {
			//const { id } = req.params as { id: string };
			return res(ctx.json(testCurrentLaunch));
		}
	),
];
