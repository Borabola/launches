
import { FC } from "react";
import { useParams } from "react-router-dom";
import { LaunchPage as LaunchContainer } from "../../containers/LaunchPage";
import { useGetCurrentLauncheQuery } from "../../services/api";
import { LaunchParams } from "./LaunchPage.types";

export const LaunchPage: FC = () => {
	const launchParam = useParams<LaunchParams>();

	const { data: currentLaunch = null, error: lunchCurrentError, isFetching: isCurrentFetching }
		= useGetCurrentLauncheQuery(launchParam.id);

	return (
		<LaunchContainer
			currentLaunch={currentLaunch}
			isCurrentFetching={isCurrentFetching}
			lunchCurrentError={lunchCurrentError}
		/>
	);
};
