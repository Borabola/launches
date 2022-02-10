
import { Container, Typography } from "@mui/material";
import { FC } from "react";
import { useIntl } from "react-intl";
import { Loader } from "../../components/common/Loader/Loader";
import { LaunchHero } from "../../components/launch/LaunchHero/LaunchHero";
import { LaunchPageContent } from "../../components/launch/LaunchPageContent/LaunchPageContent";
import { PageLayout } from "../../layouts/PageLayout";
import { outputSeverError } from "../../utils/helper";
import { useStyles } from "./LaunchPage.styles";
import type { Props } from "./LaunchPage.types";

export const LaunchPage: FC<Props> = ({ currentLaunch, isCurrentFetching, lunchCurrentError }) => {
	const classes = useStyles();
	const intl = useIntl();

	return (
		<PageLayout>
			{(!isCurrentFetching && currentLaunch) ?
				(<>
					<LaunchHero launch={currentLaunch} />
					<Container className={classes.pageContainer}>
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
							{`${intl.formatMessage({ id: "serverError" })}
							 ${outputSeverError(lunchCurrentError)}`}
						</Typography>
					}
				</>)
			}
		</PageLayout>
	);
};
