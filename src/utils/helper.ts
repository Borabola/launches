import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const isDevelopment = (): boolean => process.env.NODE_ENV === "development";

export const outputSeverError = (error: FetchBaseQueryError | SerializedError): string => {
	if ("status" in error) {
		return `Server error ${error.status.toString()}`;
	} else {
		const errorMessage = ("message" in error) ? error.message : null;
		return `Server error ${errorMessage}`;
	}
};
