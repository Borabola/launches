import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import {
	FC, useEffect, useLayoutEffect, useRef, useState
} from "react";
import { getTimeFormate } from "../../../utils/helper";
import { useStyles } from "./LaunchHero.styles";
import type { Props } from "./LaunchHero.types";

export const LaunchHero: FC<Props> = ({ launch }) => {
	const classes = useStyles();
	const [timerStr, setTimerStr] = useState(getTimeFormate(launch.launchDate));
	const [done, setDone] = useState(false);
	const [timer, setTimer] = useState<ReturnType<typeof setInterval> | undefined>();
	const timerRef = useRef<HTMLElement | null>(null);

	const clear = () => {
		timer && clearInterval(timer);
	};

	useEffect(
		() => {
			const tick = () => {
				setTimerStr(getTimeFormate(launch.launchDate));
			};
			setTimer(setInterval(
				tick,
				1000
			));
			return clear;
		},
		[launch.launchDate]
	);

	useLayoutEffect(
		() => {
			if (timerStr === 0) {
				clear();
				setDone(true);
			}
			return clear;
		},
		[timerStr]
	);

	return (

		<Box
			component="div"
			className={classes.heroWrapper}
			style={{ backgroundImage: `url(${launch.launchImg})` }}
		>
			<Container maxWidth="lg">
				<Box
					component="div"
					className={classes.heroTextWrapper}
				>
					<Typography
						variant="h1"
						mb="30px"
						color="primary"
						textAlign="center"
					>
						{launch.launchName}
					</Typography>

					<Typography
						variant="h3"
						mb="40px"
						className={classes.heroAbout}
						textAlign="center"
					>
						Go for Launch
					</Typography>

					<Box className={classes.timerWrapper}>
						<Typography
							variant="h1"
							className={classes.timer}
							ref={timerRef}
						>
							{!done ? timerStr : "DONE"}
						</Typography>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
