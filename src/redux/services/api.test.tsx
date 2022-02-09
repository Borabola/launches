import { screen } from "@testing-library/react";
import { rest } from "msw";
import { LaunchesBlock } from "../../components/main/LaunchesBlock";
import { server } from "../../mock/server";
import MainPage from "../../pages/MainPage";
import { APIRoutesEnum } from "../../types/Enums";
import { renderforRTKtest } from "../../utils/testHelper";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

describe(
	"spacelaunchesSlice, getEvents and getLaunches",
	() => {

		it(
			"getLaunches: empty launches object ",
			async () => {
				server.use(rest.get(
					`${BACKEND_URL}${APIRoutesEnum.LAUNCHES}`,
					(
						req, res, ctx
					) => {
						return res(ctx.json({}));
					}
				));

				renderforRTKtest(<MainPage />);
				const LoadingText = await screen.findByText(/Loading/i);

				expect(LoadingText).toBeInTheDocument();

			}
		);

		it(
			"useGetEventsQuery: should render received events data in Main page",
			async () => {
				renderforRTKtest(<MainPage />);
				const EventsText = await screen.findByText(/recent events/i);
				const EventNameText = await screen.findByText(/Test 1/i);
				const EventDataText = await screen.findByText(/Feb. 8, 2022/i);

				expect(EventsText).toBeInTheDocument();
				expect(EventNameText).toBeInTheDocument();
				expect(EventDataText).toBeInTheDocument();
			}
		);

		it(
			"useGetLaunchesQuery: should render received Launches data in Main page",
			async () => {
				renderforRTKtest(<LaunchesBlock />);
				const LaunchesTitleText = await screen.findByText(/Spaceflight Launches/i);
				const FirstLaunchName = await screen.findByText(/First/i);
				const SecondLaunchName = await screen.findByText(/Second/i);
				const LaunchDataText = await screen.findByText(/Feb. 10, 2022/i);

				expect(LaunchesTitleText).toBeInTheDocument();
				expect(FirstLaunchName).toBeInTheDocument();
				expect(SecondLaunchName).toBeInTheDocument();
				expect(LaunchDataText).toBeInTheDocument();
			}
		);
	}
);
