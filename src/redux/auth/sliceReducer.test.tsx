import { AuthorizationStatusEnum } from "../../types/Enums";
import reducer, { requireAuthorization } from "./sliceReducer";

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
		it(
			"should update authorizationStatus to AUTH",
			() => {
				const previousState = { authorizationStatus: AuthorizationStatusEnum.UNKNOWN };
				expect(reducer(
					previousState,
					requireAuthorization(AuthorizationStatusEnum.AUTH)
				)).toEqual({ authorizationStatus: AuthorizationStatusEnum.AUTH });

			}
		);
		it(
			"should update authorizationStatus to NO_AUTH",
			() => {
				const previousState = { authorizationStatus: AuthorizationStatusEnum.AUTH };
				expect(reducer(
					previousState,
					requireAuthorization(AuthorizationStatusEnum.NO_AUTH)
				)).toEqual({ authorizationStatus: AuthorizationStatusEnum.NO_AUTH });

			}
		);
	}
);
