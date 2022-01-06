
import {
	Container, Theme, Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/common/Loader/Loader";
import { LaunchHero } from "../../components/launch/LaunchHero/LaunchHero";
import { LaunchPageContent } from "../../components/launch/LaunchPageContent/LaunchPageContent";
import { PageLayout } from "../../layouts/PageLayout";
import type { AppDispatch } from "../../redux/store";
import { useTypedDispatch } from "../../redux/store";
import { spacelaunchesSlice, useGetCurrentLauncheQuery } from "../../services/api";


type LaunchParams = {
	id: string;
};

const useStyles = makeStyles((theme: Theme) => ({
	pageContent: {
		position: "relative",
		padding: theme.spacing(
			12.5,
			16.25,
			12.5
		), //"100px 130px 100px",
		marginTop: theme.spacing(21.25),
		maxWidth: theme.spacing(180),
		minHeight: theme.spacing(25),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#1C2056",
		zIndex: 2,
		[theme.breakpoints.down("lg")]: {
			marginTop: theme.spacing(-25),
			padding: theme.spacing(25),
		},
		[theme.breakpoints.down("md")]: {
			marginTop: theme.spacing(-5),
			padding: theme.spacing(5),
		},
	}
}));


const LaunchPage: FC = () => {
	const launchParam = useParams<LaunchParams>();
	const classes = useStyles();

	const { data: currentLaunch = null, error: lunchCurrentError, isFetching: isCurrentFetching }
		= useGetCurrentLauncheQuery(launchParam.id);

	const dispatch: AppDispatch = useTypedDispatch();

	useEffect(
		() => {
			dispatch(spacelaunchesSlice.endpoints.getCurrentLaunche.initiate(launchParam.id));
		},
		[launchParam.id]
	);

	return (
		<PageLayout>
			{(!isCurrentFetching && currentLaunch) ?
				<>
					<LaunchHero launch={currentLaunch} />

					<Container maxWidth="lg">
						<section className={classes.pageContent} >

							<LaunchPageContent launch={currentLaunch} />
						</section>
					</Container>
				</>
				:
				<>
					<Loader />
					{lunchCurrentError &&
						<Typography
							variant="h3"
							textAlign="center"
						>
							{lunchCurrentError}
						</Typography>
					}
				</>

			}
		</PageLayout>
	);
};

export default LaunchPage;
