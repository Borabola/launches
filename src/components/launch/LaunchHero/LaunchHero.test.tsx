import { screen } from "@testing-library/react";
import { LaunchHero } from ".";
import { renderWithProvidersLogin } from "../../../utils/testHelper";
import { testCurrentLaunch } from "../../../utils/tests/mockData";

describe(
	"Component: LaunchHero",
	() => {
		it(
			"should render correctly with registered user",
			() => {
				renderWithProvidersLogin(<LaunchHero launch={testCurrentLaunch} />);

				expect(screen.getByText(/Go for Launch/i)).toBeInTheDocument();
				expect(screen.getByText(/testName/i)).toBeInTheDocument();
			}
		);

		it(
			"should render correct background image",
			() => {
				const { container } =
					renderWithProvidersLogin(<LaunchHero launch={testCurrentLaunch} />);

				expect(container.firstChild).toHaveStyle(`background-image: url("testImgUrl")`);
			}
		);
	}
);
