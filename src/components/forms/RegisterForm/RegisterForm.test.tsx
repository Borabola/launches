import { screen } from "@testing-library/react";
import { RegisterForm } from ".";
import { renderWithProvidersLogout } from "../../../utils/testHelper";

const initialValuesLogin = {
	email: "testEmail",
	password: "testPassword",
	passwordConfirm: "testPassword"
};
const testSubmit = jest.fn();

describe(
	"Component: RegisterForm",
	() => {
		it(
			"should render correctly without user",
			() => {
				renderWithProvidersLogout(<RegisterForm
					initialValues={initialValuesLogin}
					onSubmit={testSubmit}
				/>);

				//buttons
				expect(screen.getByText(
					/sign up now/i,
					{ selector: "button" }
				)).toBeInTheDocument();

				//inputs
				expect(screen.getByDisplayValue(/testEmail/i)).toBeInTheDocument();
				//expect(screen.getByDisplayValue(/testPassword/i)).toBeInTheDocument();

				screen.getAllByDisplayValue(/testPassword/i).forEach((item) => {
					expect(item).toBeInTheDocument();
				});

				//link
				expect(screen.getByRole(
					"link",
					{ name: "Sign in" }
				)).toBeInTheDocument();

				//texts
				expect(screen.getByText(/Use your email to create new account/i))
					.toBeInTheDocument();
				expect(screen.getByText(/Have an account?/i)).toBeInTheDocument();
			}
		);

	}
);
