import { screen, waitFor } from "@testing-library/react";
import MainPage from ".";
import { renderWithProvidersLogout, renderWithProvidersLogin } from "../../utils/testHelper";
describe(
	"Component: MainPage",
	() => {
		it(
			"should render FormLayout correctly",
			() => {
				renderWithProvidersLogout(<MainPage/>);

				//Spaceflight Launches
				expect(screen.getByText(/Upcoming Spaceflight Launches/i)).toBeInTheDocument();
				expect(screen.getByText(/View all launches available/i)).toBeInTheDocument();
			}
		);
		//mock data from msw handlers
		it(
			"should render mock data correctly",
			() => {
				async () => {
					renderWithProvidersLogin(<MainPage/>);

					await waitFor(() =>
						expect(screen.getByText(/First Launc Name/i)).toBeInTheDocument());

					await waitFor(() =>
						expect(screen.getByText(/Test 3/i)).toBeInTheDocument());
				};
			}
		);

	}
);
