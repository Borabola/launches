import { screen } from "@testing-library/react";
import { LaunchPageContent } from ".";
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
	"Component: LaunchPageContetnt",
	() => {
		it(
			"should render correctly with registered user",
			() => {
				renderWithProvidersLogin(<LaunchPageContent launch={testCurrentLaunch} />);

				expect(screen.getByText(/destination/i)).toBeInTheDocument();
				expect(screen.getByText(/testOrbit/i)).toBeInTheDocument();
				expect(screen.getByText(/testMissionType/i)).toBeInTheDocument();
				screen.getAllByText(/mission/i).forEach((item) => {
					expect(item).toBeInTheDocument();
				});

			}
		);
	}
);
