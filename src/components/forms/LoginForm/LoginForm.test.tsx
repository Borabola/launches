import { screen } from "@testing-library/react";
import { LoginForm } from ".";
import { renderWithProvidersLogout } from "../../../utils/testHelper";

const initialValuesLogin = { email: "testEmail", password: "testPassword", };
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

				expect(screen.getByDisplayValue(/testEmail/i)).toBeInTheDocument();
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

	}
);
