import { screen} from "@testing-library/react";
import RocketPage from ".";
import { renderWithProvidersLogout, renderWithProvidersLogin } from "../../utils/testHelper";

const nowDay = new Date();
describe(
	"Component: RocketPage",
	() => {
		it(
			"should render LauncPage with Footer",
			() => {
				renderWithProvidersLogout(<RocketPage/>);

				const yearText = nowDay.getFullYear().toString();

				expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
				expect(screen.getByTestId("test_id_year")).toHaveTextContent(yearText);
			}
		);
		it(
			"should render LauncPage with Header",
			() => {
				renderWithProvidersLogin(<RocketPage/>);

				expect(screen.getByText(/logout/i)).toBeInTheDocument();
				expect(screen.getByText(/login/i)).toBeInTheDocument();
				expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
			}
		);
		it(
			"should render RocketPage content",
			async () => {
				renderWithProvidersLogout(<RocketPage/>);

				expect(screen.getByText(/Rocket/i)).toBeInTheDocument();
			}
		);
	}
);
