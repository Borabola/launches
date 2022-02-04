import { screen } from "@testing-library/react";
import { NewProductForm } from ".";
import { renderWithProvidersLogin } from "../../../utils/testHelper";

const initialValuesProduct = { productName: "TestName", file: null, productQnt: 5 };
const testSubmit = jest.fn();

describe(
	"Component: NewProductForm",
	() => {
		it(
			"should render correctly with initial values",
			() => {
				renderWithProvidersLogin(<NewProductForm
					initialValues={initialValuesProduct}
					onSubmit={testSubmit}
				/>);

				//button
				expect(screen.getByText(
					/Add new product/i,
					{ selector: "button" }
				)).toBeInTheDocument();

				//inputs
				expect(screen.getByDisplayValue(/TestName/i)).toBeInTheDocument();
				expect(screen.getByDisplayValue(5)).toBeInTheDocument();

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
