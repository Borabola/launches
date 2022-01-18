import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { FC } from "react";
import Countdown, { zeroPad } from "react-countdown";
import { useStyles } from "./LaunchHero.styles";
import type { Props } from "./LaunchHero.types";

export interface CountdownTimeDeltaFormatted {
	readonly days: string;
	readonly hours: string;
	readonly minutes: string;
	readonly seconds: string;
}

type RenderPropsType = {
	days: number,
	hours: number,
	minutes: number,
	seconds: number,
	completed: boolean,
};

export const LaunchHero: FC<Props> = ({ launch }) => {
	const classes = useStyles();

	const Completionist = () => {
		return (
			<Typography
				variant="h1"
				className={classes.timer}
			>
				DONE
			</Typography>);
	};

	const renderer = ({ days, hours, minutes, seconds, completed }: RenderPropsType) => {
		if (completed) {
			return <Completionist />;
		} else {
			return (
				<Typography
					variant="h1"
					className={classes.timer}
				>
					{zeroPad(days)} : {zeroPad(hours)} : {zeroPad(minutes)} : {zeroPad(seconds)}
				</Typography>);
		}
	};

	return (
		<Box
			component="div"
			className={classes.heroWrapper}
			style={{ backgroundImage: `url(${launch.launchImg})` }}
		>
			<Container className={classes.pageContainer}>
				<Box
					component="div"
					className={classes.heroTextWrapper}
				>
					<Typography
						variant="h1"
					>
						{launch.launchName}
					</Typography>
					<Typography
						variant="h3"
						className={classes.heroAbout}
					>
						Go for Launch
					</Typography>
					<Box className={classes.timerWrapper}>
						<Countdown
							date={launch.launchDate}
							intervalDelay={0}
							renderer={renderer}
							className={classes.timer}
						/>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
