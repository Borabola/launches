import { screen } from "@testing-library/react";
import { LaunchesBlock } from ".";
import { renderWithProvidersLogin } from "../../../utils/testHelper";

describe(
	"Component: LaunchesBlock",
	() => {
		it(
			"should render correctly with registered user",
			() => {
				renderWithProvidersLogin(<LaunchesBlock />);

				expect(screen.getByText(/Spaceflight Launches/i)).toBeInTheDocument();
			}
		);

	}
);
