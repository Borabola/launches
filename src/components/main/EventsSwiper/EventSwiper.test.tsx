import { screen } from "@testing-library/react";
import { EventsSwiper } from ".";
import { renderWithProvidersLogin } from "../../../utils/testHelper";

const testDate = "2022-01-22T15:40:00Z" as Date; //Jan. 22, 2022, 5:40 pm

const testevents = [
	{
		id: 33,
		eventName: "testName",
		eventImg: "testImgUrl",
		eventDate: testDate,
	}
];

describe(
	"Component: EventsSwiper",
	() => {
		it(
			"should render correctly with registered user",
			() => {
				renderWithProvidersLogin(<EventsSwiper events={testevents} />);

				expect(screen.getByText(/recent events/i)).toBeInTheDocument();
				expect(screen.getByText(/testName/i)).toBeInTheDocument();
				expect(screen.getByText(/Jan. 22, 2022/i)).toBeInTheDocument();
			}
		);
	}
);
