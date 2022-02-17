import { screen } from "@testing-library/react";
import { FormLayout } from ".";
import { renderWithProvidersLogin } from "../../utils/testHelper";
describe(
	"Component: container for LaunchPage ",
	() => {
		it(
			"should render layout correctly",
			() => {
				renderWithProvidersLogin(<FormLayout>
					<h1>Test child</h1>
                             </FormLayout>);

				expect(screen.queryByTestId("wrapId")).not.toBeEmptyDOMElement();
			}
		);
		it(
			"should render child",
			() => {
				renderWithProvidersLogin(<FormLayout>
					<h1>Test child</h1>
                             </FormLayout>);

				expect(screen.getByText(/Test child/i)).toBeInTheDocument();
			}
		);
	}
);
