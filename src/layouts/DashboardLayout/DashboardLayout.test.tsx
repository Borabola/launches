import { screen } from "@testing-library/react";
import { DashboardLayout } from ".";
import { renderWithProvidersLogin } from "../../utils/testHelper";
describe(
	"Component: DashboardLayout",
	() => {
		it(
			"should render layout correctly",
			() => {
				renderWithProvidersLogin(<DashboardLayout>
					<h1>Test child</h1>
                             </DashboardLayout>);
				expect(screen.getByText(/Product List/i)).toBeInTheDocument();
				expect(screen.queryByTestId("wrapId")).not.toBeEmptyDOMElement();
			}
		);
		it(
			"should render child",
			() => {
				renderWithProvidersLogin(<DashboardLayout>
					<h1>Test child</h1>
                             </DashboardLayout>);

				expect(screen.getByText(/Test child/i)).toBeInTheDocument();
			}
		);
	}
);
