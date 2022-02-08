
//import fetchMock from "jest-fetch-mock";
//import authSlice from "../../redux/auth/sliceReducer";
//import { setupApiStore } from "../../utils/RTKTestHelper";
//import { spacelaunchesSlice } from "./api";
import { screen } from "@testing-library/react";
import { rest } from "msw";
import App from "../../App/App";
import { APIRoutesEnum } from "../../types/Enums";
import { renderWithProvidersLogout } from "../../utils/testHelper";
import { testEvents } from "../../utils/tests/mockData";
import { server } from "../../utils/tests/mockServer";

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
		it(
			"should render received data in Main page",
			async () => {
				//act(() => renderWithAuth(<App />));
				server.use(rest.get(
					`${APIRoutesEnum.EVENTS}`,
					(
						req, res, ctx
					) => res(ctx.json(testEvents))
				));
				const { container } = renderWithProvidersLogout(<App />);
				console.log(container);

				expect(screen.getByText(/recent events/i)).toBeInTheDocument();
				expect(screen.getByText(/testName/i)).toBeInTheDocument();
				expect(screen.getByText(/Jan. 22, 2022/i)).toBeInTheDocument();
				//expect(screen.getByText(/Nov. 05, 1985/i)).toBeInTheDocument();
			}
		);
	}
);
