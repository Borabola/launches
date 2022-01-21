import { screen } from "@testing-library/react";
import { LaunchCard } from ".";
import { renderWithProvidersLogin } from "../../../utils/testHelper";

const testDate = (new Date(500000000000)).toString(); // Nov 05 1985 06:23:20 GMT+0530 (IST)
const testLaunch = {
	id: "testId",
	launchName: "testName",
	launchImg: "testImgUrl",
	launchDate: testDate,
	rocketId: 88
};

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
				const { container } =
					renderWithProvidersLogin(<LaunchCard launch={testLaunch} />);

				expect(container.firstElementChild.firstElementChild
					.getAttribute("href")).toEqual("/rocket/88");
				expect(container.firstElementChild.lastElementChild
					.getAttribute("href")).toEqual("/launch/testId");
			}
		);
	}
);
