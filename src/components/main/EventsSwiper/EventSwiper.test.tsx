import { screen } from "@testing-library/react";
import { EventsSwiper } from ".";
import { renderWithProvidersLogin } from "../../../utils/testHelper";
import { testEvents } from "../../../mock/mockData";

describe(
	"Component: EventsSwiper",
	() => {
		it(
			"should render correctly with registered user",
			() => {
				renderWithProvidersLogin(<EventsSwiper events={testEvents} />);

				expect(screen.getByText(/recent events/i)).toBeInTheDocument();
				expect(screen.getByText(/testName/i)).toBeInTheDocument();
				expect(screen.getByText(/Jan. 22, 2022/i)).toBeInTheDocument();
			}
		);
	}
);
