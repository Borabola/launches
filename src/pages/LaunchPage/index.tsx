
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import {
	Container, Typography, Theme 
} from "@mui/material";
import { PageLayout } from "../../layouts/PageLayout";
import { Loader } from "../../components/common/Loader/Loader";
import { LaunchHero } from "../../components/launch/LaunchHero/LaunchHero";
import { LaunchPageContent } from "../../components/launch/LaunchPageContent/LaunchPageContent";

import { launchCurrentSlice, useGetCurrentLauncheQuery } from "../../services/api";
import type { AppDispatch } from "../../redux/store";
import { useTypedDispatch } from "../../redux/store";

type LaunchParams = {
	id: string;
};

const useStyles = makeStyles((theme: Theme) => ({
	pageContent: {
		position: "relative",
		padding: "100px 130px 100px",
		marginTop: "-170px",
		maxWidth: "1440px",
		minHeight: "100px", // delete
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#1C2056",
		zIndex: 2,
		[theme.breakpoints.down("lg")]: {
			marginTop: "-50px",
			padding: "50px",
		},
		[theme.breakpoints.down("md")]: {
			marginTop: "-20px",
			padding: "20px",
		},
	}
}));


const LaunchPage: FC = () => {
	const launchParam = useParams<LaunchParams>();
	const classes = useStyles();

	const { data: currentLaunch=null, error: lunchCurrentError, isLoading: isCurrentLaunchLoaded }
	 = useGetCurrentLauncheQuery(launchParam.id);

	const dispatch: AppDispatch = useTypedDispatch();

	useEffect(
		() => {
			dispatch(launchCurrentSlice.endpoints.getCurrentLaunche.initiate(launchParam.id));
		},
		[launchParam.id]
	);

	return (
		<PageLayout>
			{(isCurrentLaunchLoaded && currentLaunch) ?
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