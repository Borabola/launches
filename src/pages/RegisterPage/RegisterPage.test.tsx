import { screen } from "@testing-library/react";
import RegisterPage from ".";
import { renderWithProvidersLogout } from "../../utils/testHelper";
describe(
	"Component: RegisterPage",
	() => {
		it(
			"should render FormLayout correctly",
			() => {
				renderWithProvidersLogout(<RegisterPage/>);

				expect(screen.queryByTestId("wrapId")).not.toBeEmptyDOMElement();
			}
		);
		it(
			"should render form correctly",
			() => {
				renderWithProvidersLogout(<RegisterPage/>);

				//buttons
				expect(screen.getByText(
					/sign up now/i,
					{ selector: "button" }
				)).toBeInTheDocument();

				//link
				expect(screen.getByRole(
					"link",
					{ name: "Sign in" }
				)).toBeInTheDocument();

				//texts
				expect(screen.getByText(/Create new account/))
					.toBeInTheDocument();
				expect(screen.getByText(/Use your email to create new account/i))
					.toBeInTheDocument();
				expect(screen.getByText(/Have an account?/i)).toBeInTheDocument();
			}
		);

	}
);
