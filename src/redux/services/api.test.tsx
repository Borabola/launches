
import fetchMock from "jest-fetch-mock";
import authSlice from "../../redux/auth/sliceReducer";
import { APIRoutesEnum } from "../../types/Enums";
import { setupApiStore } from "../../utils/RTKTestHelper";
import { spacelaunchesSlice } from "./api";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

beforeEach((): void => {
	fetchMock.resetMocks();
});

describe(
	"spacelaunchesSlice, getEvents ",
	() => {
		const storeRef = setupApiStore(
			spacelaunchesSlice,
			{ auth: authSlice }
		);
		fetchMock.mockResponse(JSON.stringify({}));

		test(
			"request is correct",
			() => {
				return storeRef.store
					.dispatch(spacelaunchesSlice.endpoints.getEvents.initiate())
					.then(() => {
						expect(fetchMock).toBeCalledTimes(0);
						console.log(fetchMock.mock.calls[0]);
						const { url } = fetchMock.mock.calls[0][0] as Request;
						expect(url).toBe(`${BACKEND_URL}${APIRoutesEnum.EVENTS}`);
					});
			}
		);
	}
);
