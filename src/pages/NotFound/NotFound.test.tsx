import { screen} from "@testing-library/react";
import NotFound from ".";
import { renderWithProvidersLogout} from "../../utils/testHelper";
describe(
	"Component: MainPage",
	() => {
		it(
			"should render FormLayout correctly",
			() => {
				renderWithProvidersLogout(<NotFound/>);

				expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
				expect(screen.getByText(/Link to Main Page/i)).toBeInTheDocument();
			}
		);	}
);
