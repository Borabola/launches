import { outputSeverError } from "./helper";

describe(
	"function outputSeverError:",
	() => {
		it(
			"FetchBaseQueryError type",
			() => {
				const value = outputSeverError({
					status: "FETCH_ERROR",
					error: "test error",
				});
				expect(value).toBe("Server error FETCH_ERROR");
			}
		);

		it(
			"SerializedError type",
			() => {
				const value = outputSeverError({
					name: "test SerializedError",
					message: "SerializedError message"
				});
				expect(value).toBe("Server error SerializedError message");
			}
		);
	}
);
