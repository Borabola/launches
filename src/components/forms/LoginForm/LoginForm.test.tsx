import { screen } from "@testing-library/react";
import { LoginForm } from ".";
import { renderWithProvidersLogout } from "../../../utils/testHelper";

const initialValuesLogin = { email: "john@someemail.com", password: "testPassword", };
const initialValuesLoginNull = { email: "", password: "", };
const testSubmit = jest.fn();
const testPath = { from: { pathname: "testPath" } };

describe(
	"Component: LoginForm",
	() => {
		it(
			"should render correctly without user",
			() => {
				renderWithProvidersLogout(<LoginForm
					initialValues={initialValuesLogin}
					onSubmit={testSubmit}
					pathFrom={testPath}
				/>);

				//buttons
				expect(screen.getByText(
					/sign in now/i,
					{ selector: "button" }
				)).toBeInTheDocument();
				expect(screen.getByText(
					/Login with google account/i,
					{ selector: "button" }
				)).toBeInTheDocument();

				//inputs

				//for email input
				expect(screen.getByRole(
					"textbox",
					{ name: "" }
				)).toBeInTheDocument();

				expect(screen.getByDisplayValue(/john@someemail.com/i)).toBeInTheDocument();
				expect(screen.getByDisplayValue(/testPassword/i)).toBeInTheDocument();

				//link
				expect(screen.getByRole(
					"link",
					{ name: "Sign up" }
				)).toBeInTheDocument();

				//texts
				screen.getAllByText(/sign up/i).forEach((item) => {
					expect(item).toBeInTheDocument();
				});
				screen.getAllByText(/login/i).forEach((item) => {
					expect(item).toBeInTheDocument();
				});
			}
		);

		/*test(
			"rendering and submitting a basic Formik form",
			async () => {
				//const handleSubmit = jest.fn();
				const { container } = renderWithProvidersLogout(<LoginForm
					initialValues={initialValuesLoginNull}
					onSubmit={testSubmit}
					pathFrom={testPath}
				/>);

				const userEmailNode = container.querySelector(`[data-testid="userEmail"] input`);
				const userPasswordNode = container.querySelector(`[data-testid="userEmail"] input`);
				if (userEmailNode) {
					//userEvent.clear(userEmailNode);
					userEvent.type(
						userEmailNode,
						"john@someemail.com"
					);
				}
				if (userPasswordNode) {
					//userEvent.clear(userPasswordNode);
					userEvent.type(
						userPasswordNode,
						"123456"
					);
				}
				fireEvent.click(screen.getByTestId("submitBtn"));

				await waitFor(() =>
					expect(testSubmit).toHaveBeenCalledWith({
						"email": "john@someemail.com",
						"password": "testPassword",
					}));
			}
		);*/
	}
);
