
import { renderHook } from "@testing-library/react-hooks";
import fetchMock from "jest-fetch-mock";
import { FC } from "react";
import { setupApiStore } from "../../utils/RTKTestHelper";
import { renderforRTKtest } from "../../utils/testHelper";
import { testEvents } from "../../utils/tests/mockData";
import authSlice from "../auth/sliceReducer";
import { spacelaunchesSlice, useGetEventsQuery } from "./api";

const updateTimeout = 5000;
//const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const TEST_URL = "https://test.test/api/";
beforeEach((): void => {
	fetchMock.resetMocks();
});

/*const wrapper: FC = ({ children }: PropsWithChildren<Record<string, unknown>>) => {
	const storeRef = setupApiStore(
		spacelaunchesSlice,
		{ auth: authSlice }
	);
	//return renderforRTKtest(storeRef.store);
	return (<Provider store= { storeRef.store } >
		{ children }
		< /Provider>);
};*/

const testElement: FC = () => {
	return (
		<h1>Hello! < /h1>
	);
};

const wrapper: FC = ({ children }) => {
	const storeRef = setupApiStore(
		spacelaunchesSlice,
		{ auth: authSlice }
	);
	const renderWithTestStore = renderforRTKtest(storeRef.store);

	return renderWithTestStore(testElement);
};

describe(
	"getEvents",
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
