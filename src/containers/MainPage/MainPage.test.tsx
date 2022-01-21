import { screen } from "@testing-library/react";
import { MainPage } from ".";
import { renderWithProvidersLogin } from "../../utils/testHelper";

const testDate = "2022-01-22T15:40:00Z" as Date; //Jan. 22, 2022, 5:40 pm

const testEvents = [
	{
		id: 33,
		eventName: "testName",
		eventImg: "testImgUrl",
		eventDate: testDate,
	}
];

describe(
	"Component: container for MainPage ",
	() => {
		it(
			"should render correctly with received data",
			() => {
				renderWithProvidersLogin(<MainPage
					events={testEvents}
					isEventsFetching={false}
				/>);

				expect(screen.getByText(/testName/i)).toBeInTheDocument();
			}
		);
		it(
			"should render Loader during fetching",
			() => {
				renderWithProvidersLogin(<MainPage
					events={null}
					isEventsFetching={true}
				/>);

				expect(screen.getByText(/Loading/i)).toBeInTheDocument();
			}
		);

	}
);
