import { screen } from "@testing-library/react";
import { LaunchCard } from ".";
import { testLaunch } from "../../../mock/mockData";
import { renderWithProvidersLogin } from "../../../utils/testHelper";

describe(
	"Component: LaunchCard",
	() => {
		it(
			"should render correctly with registered user",
			() => {
				renderWithProvidersLogin(<LaunchCard launch={testLaunch} />);

				expect(screen.getByText(/testName/i)).toBeInTheDocument();
			}
		);
		it(
			"should have correct links",
			() => {
				renderWithProvidersLogin(<LaunchCard launch={testLaunch} />);

				expect(screen.getByTestId("rocketLink")
					.getAttribute("href")).toEqual("/rocket/88");
				expect(screen.getByTestId("launchLink")
					.getAttribute("href")).toEqual("/launch/testId");
			}
		);
	}
);
