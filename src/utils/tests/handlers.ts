//import { createEntityAdapter } from "@reduxjs/toolkit";
import { rest } from "msw";
import { APIRoutesEnum } from "../../types/Enums";
import {
	testCurrentLaunch, testEvents, testLaunch
} from "./mockData";

export const handlers = [
	rest.get(
		`${APIRoutesEnum.EVENTS}`,
		(
			req, res, ctx
		) => {
			return res(ctx.json(testEvents));
		}
	),
	rest.get(
		`${APIRoutesEnum.LAUNCHES}`,
		(
			req, res, ctx
		) => {
			return res(ctx.json([testLaunch]));
		}
	),

	rest.get(
		"/launch/:id",
		(
			req, res, ctx
		) => {
			//const { id } = req.params as { id: string };
			return res(ctx.json(testCurrentLaunch));
		}
	),
];
