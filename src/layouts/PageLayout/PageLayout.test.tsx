import { screen } from "@testing-library/react";
import { PageLayout } from ".";
import { renderWithProvidersLogin } from "../../utils/testHelper";

const nowDay = new Date();
describe(
	"Component: container for LaunchPage ",
	() => {
		it(
			"should render Footer content correctly",
			() => {
				renderWithProvidersLogin(<PageLayout>
					<h1>Test child</h1>
                             </PageLayout>);

				const yearText = nowDay.getFullYear().toString();

				expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
				expect(screen.getByTestId("test_id_year")).toHaveTextContent(yearText);
			}
		);
		it(
			"should render Header content correctly",
			() => {
				renderWithProvidersLogin(<PageLayout>
					<h1>Test child</h1>
                             </PageLayout>);

				expect(screen.getByText(/logout/i)).toBeInTheDocument();
				expect(screen.getByText(/login/i)).toBeInTheDocument();
				expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
				expect(screen.getByText(/Add New Product/i)).toBeInTheDocument();
			}
		);
		it(
			"should render child",
			() => {
				renderWithProvidersLogin(<PageLayout>
					<h1>Test child</h1>
                             </PageLayout>);

				expect(screen.getByText(/Test child/i)).toBeInTheDocument();
			}
		);
	}
);
