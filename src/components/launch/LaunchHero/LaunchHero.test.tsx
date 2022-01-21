import { screen } from "@testing-library/react";
import { LaunchHero } from ".";
import { renderWithProvidersLogin } from "../../../utils/testHelper";

const testDate = (Date.now() + 5000).toString();
const testCurrentLaunch = {
	id: "testId",
	launchName: "testName",
	launchImg: "testImgUrl",
	videoURLs: "testVideoUrl",
	rocketDescription: "testDescription",
	launchDestination: "testOrbit",
	launchMission: "testMissionType",
	launchDate: testDate,
};
describe(
	"Component: Header",
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
