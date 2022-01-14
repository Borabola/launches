
import { Container, Typography } from "@mui/material";
import { FC } from "react";
import { Loader } from "../../components/common/Loader/Loader";
import { LaunchHero } from "../../components/launch/LaunchHero/LaunchHero";
import { LaunchPageContent } from "../../components/launch/LaunchPageContent/LaunchPageContent";
import { PageLayout } from "../../layouts/PageLayout";
import { useStyles } from "./LaunchPage.styles";
import type { Props } from "./LaunchPage.types";

export const LaunchPage: FC<Props> = ({ currentLaunch, isCurrentFetching, lunchCurrentError }) => {
	const classes = useStyles();

	return (
		<PageLayout>
			{(!isCurrentFetching && currentLaunch) ?
				(<>
					<LaunchHero launch={currentLaunch} />

					<Container maxWidth="lg">
						<section className={classes.pageContent} >

							<LaunchPageContent launch={currentLaunch} />
						</section>
					</Container>
				</>)
				:
				(<>
					<Loader />
					{lunchCurrentError &&
						<Typography
							variant="h3"
							textAlign="center"
						>
							{lunchCurrentError}
						</Typography>
					}
				</>)
			}
		</PageLayout>
	);
};
