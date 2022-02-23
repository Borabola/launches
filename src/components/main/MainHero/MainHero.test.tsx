import { screen } from "@testing-library/react";
import { MainHero } from ".";
import { renderWithProvidersLogin } from "../../../utils/testHelper";

const pageLink = "/";

describe(
	"Component: MainHero",
	() => {
		it(
			"should render correctly with registered user",
			() => {
				renderWithProvidersLogin(<MainHero />);

				expect(screen.getByText(/Upcoming spaceflight launches/i)).toBeInTheDocument();
				expect(screen.getByText(/View all launches available/i))
					.toBeInTheDocument();
				expect(screen.getByText(/Show all launches/i)).toBeInTheDocument();
			}
		);

		it(
			"should have correct links",
			() => {

				renderWithProvidersLogin(<MainHero />);

				expect(screen.getByTestId("test_link").getAttribute("href")).toEqual(pageLink);
			}
		);

	}
);
