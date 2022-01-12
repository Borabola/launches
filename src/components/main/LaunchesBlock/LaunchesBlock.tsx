import {
	Box, Grid, Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
	FC, useEffect, useRef, useState
} from "react";
import { useIntl } from "react-intl";
import { useGetLaunchesQuery } from "../../../services/api";
import type { LaunchAdapterType } from "../../../utils/adapter";
import { REQUEST_QNT } from "../../../utils/const";
import { Loader } from "../../common/Loader";
import { LaunchCard } from "../LaunchCard";

const useStyles = makeStyles({
	launchesWrapper: {
		width: "100%",
	},
	launchesTitle: {
		textAlign: "center",
	},
	loaderWrapper: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	}
});

const options = {
	root: null,
	rootMargin: "0px",
	threshold: 1.0
};

export const LaunchesBlock: FC = () => {
	const [currentLaunches, setCurrentLaunches] = useState<LaunchAdapterType[]>([]);
	const [launchesQnt, setlaunchesQnt] = useState<number>(0);
	const classes = useStyles();
	const intl = useIntl();
	const [totalCount, setTotalCount] = useState<number>(1);


	const observerLoaderRef = useRef<HTMLDivElement>();

	const { data: currentData = null, isError: isLaunchesError,
		isFetching: isLaunchesFetching } = useGetLaunchesQuery(launchesQnt);

	useEffect(
		() => {
			const observer = new IntersectionObserver(
				(entries: IntersectionObserverEntry[]) => {
					const [entry] = entries;
					if (entry.intersectionRatio >= 1) {
						setlaunchesQnt((prev) => prev + REQUEST_QNT);
					}
				},
				options
			);

			if (observerLoaderRef.current) observer.observe(observerLoaderRef.current);

			return () => {
				if (observerLoaderRef.current) observer.unobserve(observerLoaderRef.current);
			};
		},
		[observerLoaderRef]
	);


	useEffect(
		() => {
			if (currentLaunches.length < totalCount) {
				if (currentData && currentData.launches.length > 0) {
					const allLaunches = new Set([...currentLaunches, ...currentData.launches]);
					//setCurrentLaunches([...allLaunches]);
					setCurrentLaunches(Array.from(allLaunches));
				}
				if (currentData && currentData.totalQnt && !isLaunchesError) {
					setTotalCount(currentData?.totalQnt);
				}
			}
		},
		[launchesQnt]
	);


	return (
		<div className={classes.launchesWrapper}>
			<Typography
				variant="h2"
				mb='30px'
				className={classes.launchesTitle}
			>
				{intl.formatMessage({ id: "spaceflightLaunches" })}
			</Typography>
			<div >
				<Grid
					container
					spacing={2}

				>
					{currentLaunches.length > 0 &&
						currentLaunches.map(launch => {

							return (
								<Grid
									item
									xs={12}
									md={6}
									key={launch.id}
								>
									<LaunchCard
										launch={launch}
									/>
								</Grid>
							);
						})
					}
					{(currentLaunches.length < totalCount) &&
						<Box
							className={classes.loaderWrapper}
							ref={observerLoaderRef}
						>
							<Loader />
							{isLaunchesFetching && <p>Loading ...</p>}
							{isLaunchesError && <p>Server error ...</p>}
						</Box >}

				</Grid>
			</div>

		</div>
	);
};
