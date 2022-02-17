import { screen } from "@testing-library/react";
import { FormWithHeaderLayout } from ".";
import { renderWithProvidersLogin } from "../../utils/testHelper";
describe(
	"Component: container for LaunchPage ",
	() => {
		it(
			"should render layout correctly",
			() => {
				renderWithProvidersLogin(<FormWithHeaderLayout>
					<h1>Test child</h1>
                             </FormWithHeaderLayout>);

				expect(screen.getByText(/logout/i)).toBeInTheDocument();
				expect(screen.getByText(/login/i)).toBeInTheDocument();
				expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
				expect(screen.getByText(/Add New Product/i)).toBeInTheDocument();
				expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
				expect(screen.queryByTestId("wrapId")).not.toBeEmptyDOMElement();
			}
		);
		it(
			"should render child",
			() => {
				renderWithProvidersLogin(<FormWithHeaderLayout>
					<h1>Test child</h1>
                             </FormWithHeaderLayout>);

				expect(screen.getByText(/Test child/i)).toBeInTheDocument();
			}
		);
	}
);
