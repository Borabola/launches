import { screen } from "@testing-library/react";
import { LaunchCard } from ".";
import { renderWithProvidersLogin } from "../../../utils/testHelper";
import { testLaunch } from "../../../utils/tests/mockData";

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
