import { screen, waitFor } from "@testing-library/react";
import LaunchPage from ".";
import { renderWithAuthTestLaunchPage } from "../../utils/testHelper";

const nowDay = new Date();
describe(
	"Component: LauncPage ",
	() => {
		it(
			"should render LauncPage with Footer",
			() => {
				renderWithAuthTestLaunchPage(<LaunchPage/>);

				const yearText = nowDay.getFullYear().toString();

				expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
				expect(screen.getByTestId("test_id_year")).toHaveTextContent(yearText);
			}
		);
		it(
			"should render LauncPage with Header",
			() => {
				renderWithAuthTestLaunchPage(<LaunchPage/>);

				expect(screen.getByText(/logout/i)).toBeInTheDocument();
				expect(screen.getByText(/login/i)).toBeInTheDocument();
				expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
			}
		);
		it(
			"should render LauncPage",
			async () => {
				renderWithAuthTestLaunchPage(<LaunchPage/>);

				await waitFor(() =>
					expect(screen.getByText(/Overview/i)).toBeInTheDocument());
			}
		);
	}
);
