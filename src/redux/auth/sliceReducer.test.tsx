import { AuthorizationStatusEnum } from "../../types/Enums";
import reducer from "./sliceReducer";

describe(
	"userSlice reducer",
	() => {
		it(
			"without additional parameters should return initial state",
			() => {
				expect(reducer(
					undefined,
					{ type: "UNKNOWN_ACTION" }
				))
					.toEqual({ authorizationStatus: AuthorizationStatusEnum.UNKNOWN });

			}
		);
	}
);
