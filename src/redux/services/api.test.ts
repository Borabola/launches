
import fetchMock from "jest-fetch-mock";
import { setupApiStore } from "../../utils/RTKTestHelper";
import { testEvents } from "../../utils/tests/mockData";
import authSlice from "../auth/sliceReducer";
import { spacelaunchesSlice } from "./api";

//const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const TEST_URL = "https://test.test/api/";
beforeEach((): void => {
	fetchMock.resetMocks();
});

describe(
	"get Events",
	() => {
		const storeRef = setupApiStore(
			spacelaunchesSlice,
			{ auth: authSlice }
		);
		fetchMock.mockResponse(JSON.stringify({ testEvents }));
		//console.log(fetchMock);

		test(
			"request is correct",
			() => {
				return storeRef.store
					.dispatch<any>(spacelaunchesSlice.endpoints.getEvents.initiate())
					.then((action: any) => {
						const { status, data, isSuccess } = action;
						expect(status).toBe("fulfilled");
						expect(isSuccess).toBe(true);
						console.log(data);
						//expect(data).toStrictEqual(testEvents);
					});

				/*.then(() => {
					console.log(storeRef.store.getState()
						.spacelaunchesSlice.subscriptions["getEvents(undefined)"]);
					//console.log(fetchMock.mockResponseOnce);
					expect(fetchMock).toBeCalledTimes(1);
					//const { method, url } = fetchMock.mock.calls[0][0] as Request;

					//expect(method).toBe("GET");
					//expect(url).toBe(`${BACKEND_URL}${APIRoutesEnum.EVENTS}`);
				});*/
			}
		);
	}
);
