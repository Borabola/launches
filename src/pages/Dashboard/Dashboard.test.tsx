import { screen } from "@testing-library/react";
import Dashboard from ".";
import { renderWithProvidersLogin } from "../../utils/testHelper";

const nowDay = new Date();
describe(
	"Component: Dashboard ",
	() => {
		it(
			"should render Footer content correctly",
			() => {
				renderWithProvidersLogin(<Dashboard/>);

				const yearText = nowDay.getFullYear().toString();

				expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
				expect(screen.getByTestId("test_id_year")).toHaveTextContent(yearText);
			}
		);
		it(
			"should render Header content correctly",
			() => {
				renderWithProvidersLogin(<Dashboard/>);

				expect(screen.getByText(/logout/i)).toBeInTheDocument();
				expect(screen.getByText(/login/i)).toBeInTheDocument();
				expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
			}
		);
		it(
			"should render  dashboard table with correct headers",
			() => {
				renderWithProvidersLogin(<Dashboard/>);

				expect(screen.getByText(/Product Id/i)).toBeInTheDocument();
				expect(screen.getByText(/Title/i)).toBeInTheDocument();
				expect(screen.getByText(/Quantity/i)).toBeInTheDocument();
				expect(screen.getByText(/Picture/i)).toBeInTheDocument();
			}
		);
	}
);
