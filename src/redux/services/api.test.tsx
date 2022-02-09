
//import fetchMock from "jest-fetch-mock";
//import authSlice from "../../redux/auth/sliceReducer";
//import { setupApiStore } from "../../utils/RTKTestHelper";
//import { spacelaunchesSlice } from "./api";
import { screen } from "@testing-library/react";
import MainPage from "../../pages/MainPage";
import { renderforRTKtest } from "../../utils/testHelper";

//const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

describe(
	"spacelaunchesSlice, getEvents ",
	() => {

		/*it(
			"empty events object",
			() => {
				server.use(rest.get(
					`${APIRoutesEnum.EVENTS}`,
					(
						req, res, ctx
					) => res(ctx.json([]))
				));

				renderWithUnknownHistory(<App />);

				expect(screen.getByText(/recent events/i)).not.toBeInTheDocument();

			}
		);*/
		/*test(
			"fetches items from API on page load",
			async () => {
				renderforRTKtest(<MainPage />);
				//const rows = await screen.findAllByText(/items_/);

				expect(screen.findByText(/recent events/i)).toBeInTheDocument();
			}
		);*/
		it(
			"should render received data in Main page",
			async () => {
				//act(() => renderWithAuth(<App />));
				/*server.use(rest.get(
					`${APIRoutesEnum.EVENTS}`,
					(
						req, res, ctx
					) => res(ctx.json(testEvents))
				));*/
				renderforRTKtest(<MainPage />);
				//console.log(container);
				const EventsText = await screen.findByText(/recent events/i);
				const EventNameText = await screen.findByText(/testName/i);
				const EventDataText = await screen.findByText(/Jan. 22, 2022/i);

				expect(EventsText).toBeInTheDocument();
				expect(EventNameText).toBeInTheDocument();
				expect(EventDataText).toBeInTheDocument();

				//expect(screen.findByText(/recent events/i)).toBeInTheDocument();
				//expect(screen.getByText(/testName/i)).toBeInTheDocument();
				//expect(screen.getByText(/Jan. 22, 2022/i)).toBeInTheDocument();
				//expect(screen.getByText(/Nov. 05, 1985/i)).toBeInTheDocument();
			}
		);
	}
);
