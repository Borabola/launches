import { screen } from "@testing-library/react";
import { LaunchPage } from ".";
import { renderWithProvidersLogin } from "../../utils/testHelper";

const testDate = (Date.now() + 5000).toString();
const testCurrentLaunch = {
	id: "testId",
	launchName: "testName",
	launchImg: "testImgUrl",
	videoURLs: "testVideoUrl",
	rocketDescription: "testDescription",
	launchDestination: "testOrbit",
	launchMission: "testMissionType",
	launchDate: testDate
};

describe(
	"Component: container for LaunchPage ",
	() => {
		it(
			"should render correctly with received data",
			() => {
				renderWithProvidersLogin(<LaunchPage
					currentLaunch={testCurrentLaunch}
					isCurrentFetching={false}
					lunchCurrentError={undefined}
				/>);

				expect(screen.getByText(/testName/i)).toBeInTheDocument();
			}
		);

		it(
			"should render correctly error in fetching",
			() => {
				renderWithProvidersLogin(<LaunchPage
					currentLaunch={null}
					isCurrentFetching={false}
					lunchCurrentError={{ message: "test error message" }}
				/>);

				expect(screen.getByText(/test error message/i)).toBeInTheDocument();
			}
		);
		it(
			"should render Loader during fetching",
			() => {
				renderWithProvidersLogin(<LaunchPage
					currentLaunch={null}
					isCurrentFetching={true}
					lunchCurrentError={undefined}
				/>);

				expect(screen.getByText(/Loading/i)).toBeInTheDocument();
			}
		);

	}
);
