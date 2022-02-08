
import { renderHook } from "@testing-library/react-hooks";
import fetchMock from "jest-fetch-mock";
import { FC } from "react";
//import { renderforRTKtest } from "../../utils/testHelper";
import { Provider } from "react-redux";
import { setupApiStore } from "../../utils/RTKTestHelper";
import { testEvents, testLaunch } from "../../utils/tests/mockData";
import authSlice from "../auth/sliceReducer";
import {
	spacelaunchesSlice, useGetEventsQuery, useGetLaunchesQuery
} from "./api";

const updateTimeout = 5000;

beforeEach((): void => {
	fetchMock.resetMocks();
});

const wrapper: FC = ({ children }) => {
	const storeRef = setupApiStore(
		spacelaunchesSlice,
		{ auth: authSlice }
	);
	return <Provider store={storeRef.store}>{children}</Provider>;
};

describe(
	"useGetEventsQuery",
	() => {
		it(
			"Success",
			async () => {
				fetchMock.mockResponse(JSON.stringify({ testEvents }));
				const { result, waitForNextUpdate } = renderHook(
					() => useGetEventsQuery(),
					{ wrapper }
				);
				const initialResponse = result.current;
				expect(initialResponse.data).toBeUndefined();
				expect(initialResponse.isLoading).toBe(true);
				await waitForNextUpdate({ timeout: updateTimeout });

				const nextResponse = result.current;
				expect(nextResponse.data).not.toBeUndefined();
				expect(nextResponse.isLoading).toBe(false);
				expect(nextResponse.isSuccess).toBe(true);
			}
		);
	}
);

describe(
	"getLaunches",
	() => {
		it(
			"Success",
			async () => {
				fetchMock.mockResponse(JSON.stringify({ testLaunch }));
				const { result, waitForNextUpdate } = renderHook(
					() => useGetLaunchesQuery(1),
					{ wrapper }
				);
				const initialResponse = result.current;
				expect(initialResponse.data).toBeUndefined();
				expect(initialResponse.isLoading).toBe(true);
				await waitForNextUpdate({ timeout: updateTimeout });

				console.log(
					"getLaunches",
					result.current
				);
				const nextResponse = result.current;
				expect(nextResponse.data).not.toBeUndefined();
				expect(nextResponse.isLoading).toBe(false);
				expect(nextResponse.isSuccess).toBe(true);

			}
		);

		/*it(
			"Internal Server Error",
			async () => {
				fetchMock.mockReject(new Error("Internal Server Error"));
				const { result, waitForNextUpdate } = renderHook(
					() => useGetEventsQuery(),
					{ wrapper }
				);
				const initialResponse = result.current;
				expect(initialResponse.data).toBeUndefined();
				expect(initialResponse.isLoading).toBe(true);

				await waitForNextUpdate({ timeout: updateTimeout });

				const nextResponse = result.current;
				expect(nextResponse.data).toBeUndefined();
				expect(nextResponse.isLoading).toBe(false);
				expect(nextResponse.isError).toBe(true);
			}
		);*/
	}
);

/*describe(
	"getCurrentLaunche",
	() => {
		it(
			"Success",
			async () => {
				fetchMock.mockResponse(JSON.stringify({ testCurrentLaunch }));
				const { result, waitForNextUpdate } = renderHook(
					() => useGetCurrentLauncheQuery("testId"),
					{ wrapper }
				);
				console.log(result.current);
				const initialResponse = result.current;
				expect(initialResponse.data).toBeUndefined();
				expect(initialResponse.isLoading).toBe(true);
				await waitForNextUpdate({ timeout: updateTimeout });

				console.log(result.current);
				const nextResponse = result.current;
				expect(nextResponse.data).not.toBeUndefined();
				expect(nextResponse.isLoading).toBe(false);
				expect(nextResponse.isSuccess).toBe(true);

			}
		);
	}

);*/
