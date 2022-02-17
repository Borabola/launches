import { screen } from "@testing-library/react";
import AddProductPage from ".";
import { renderWithProvidersLogin } from "../../utils/testHelper";

const nowDay = new Date();
describe(
	"Component: AddProductPage ",
	() => {
		it(
			"should render Footer content correctly",
			() => {
				renderWithProvidersLogin(<AddProductPage/>);

				const yearText = nowDay.getFullYear().toString();

				expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
				expect(screen.getByTestId("test_id_year")).toHaveTextContent(yearText);
			}
		);
		it(
			"should render Header content correctly",
			() => {
				renderWithProvidersLogin(<AddProductPage/>);

				expect(screen.getByText(/logout/i)).toBeInTheDocument();
				expect(screen.getByText(/login/i)).toBeInTheDocument();
				expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
			}
		);
		it(
			"should render form",
			() => {
				renderWithProvidersLogin(<AddProductPage/>);
				//button
				expect(screen.getByText(
					/Add new product/i,
					{ selector: "button" }
				)).toBeInTheDocument();

				//texts
				screen.getAllByText(/Accepted files/i).forEach((item) => {
					expect(item).toBeInTheDocument();
				});
				screen.getAllByText(/Rejected files/i).forEach((item) => {
					expect(item).toBeInTheDocument();
				});

				expect(screen.getByRole(
					"heading",
					{ name: "New Product" }
				)).toBeInTheDocument();
			}
		);
	}
);
