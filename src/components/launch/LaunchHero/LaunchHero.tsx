import {
	Container, Theme, Typography
} from "@mui/material";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import {
	FC, useEffect, useLayoutEffect, useRef, useState
} from "react";
import { getTimeFormate } from "../../../utils/helper";
import type { Props } from "./LaunchHero.types";

const useStyles = makeStyles((theme: Theme) => ({
	heroAbout: {
		maxWidth: theme.spacing(74.4),
		marginBottom: theme.spacing(6.25),
		color: theme.palette.info.main,
		fontFamily: "Roboto",
		fontWeight: "400",
		fontSize: "1.0625rem",
		lineHeight: "165%",
	},
	heroWrapper: {
		position: "relative",
		fontFamily: "Montserrat",
		width: "100%",
		marginTop: theme.spacing(-12.5),
		display: "flex",
		backgroundRepeat: "no-repeat",
		backgroundSize: "100%",
		backgroundPosition: "top center",
		[theme.breakpoints.down("md")]: {
			height: "auto",
		},
		"&::after": {
			position: "absolute",
			content: "",
			width: "100%",
			height: "100%",
			background: "linear-gradient(1.22deg, #181B48 3.9%, rgba(24, 27, 72, 0) 98.66%)",
		},
	},
	heroText: {
		fontFamily: "Montserrat",
		marginBottom: theme.spacing(3.75),
		fontWeight: "800",
		fontSize: "4.75rem",
		lineHeight: "121%",
		color: theme.palette.primary.main,
	},
	heroTextWrapper: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		fontFamily: "Montserrat",
		paddingTop: "28%",
		paddingBottom: "24.4vw",
		[theme.breakpoints.down("lg")]: {
			paddingTop: theme.spacing(32.5),
		},
		[theme.breakpoints.down("md")]: {
			paddingTop: theme.spacing(25),
		},
		[theme.breakpoints.down("sm")]: {
			paddingLeft: 0,
		},
	},
	timerWrapper: {
		backgroundColor: "#4A00E0",
		padding: theme.spacing(
			6.25,
			8.75
		),
		minHeight: theme.spacing(23.75),
		minWidth: theme.spacing(97.5),

		"& h1": {
			textAlign: "start",
			paddingLeft: theme.spacing(5)
		}
	},
	timer: {
		color: theme.palette.primary.main,
	},
}));

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
