import { screen } from "@testing-library/react";
import Login from ".";
import { renderWithProvidersLogout } from "../../utils/testHelper";
describe(
	"Component: Login page ",
	() => {
		it(
			"should render FormLayout correctly",
			() => {
				renderWithProvidersLogout(<Login/>);

				expect(screen.queryByTestId("wrapId")).not.toBeEmptyDOMElement();
			}
		);
		it(
			"should render form correctly",
			() => {
				renderWithProvidersLogout(<Login/>);

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
			}
		);

	}
);
