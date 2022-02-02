import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	heroAbout: {
		maxWidth: theme.spacing(74.4),
		color: theme.palette.info.main,
		fontFamily: "Roboto",
		fontWeight: "400",
		fontSize: "1.0625rem",
		lineHeight: "165%",
		"&.MuiTypography-root": {
			textAlign: "center",
			marginBottom: theme.spacing(6.25),
		}
	},
	heroWrapper: {
		position: "relative",
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
			background: `linear-gradient(1.22deg, 
				${theme.palette.background.default} 3.9%,
				${theme.palette.secondary.light} 98.66%)`,
		},
	},
	heroText: {
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
		"& span": {
			fontSize: theme.spacing(7.5)
		}
	},
	timerWrapper: {
		backgroundColor: theme.palette.info.dark,
		padding: theme.spacing(
			6.25,
			8.75
		),
		minHeight: theme.spacing(23.75),
		minWidth: theme.spacing(97.5),
		display: "flex",
		alignItems: "center",
		"& span": {
			textAlign: "start",
			paddingLeft: theme.spacing(12),
			fontSize: 76,
			fontWeight: 800,
			lineHeight: "121%",
			letterSpacing: 0,
			[theme.breakpoints.down("lg")]: {
				fontSize: 60
			},
			[theme.breakpoints.down("sm")]: {
				fontSize: 48
			},
		},
		"& h1": {
			textAlign: "start",
			paddingLeft: theme.spacing(5)
		}
	},
	timer: {
		color: theme.palette.primary.main,
	},
	pageContainer: {
		"&.MuiContainer-root": {
			maxWidth: theme.breakpoints.values.lg,
		}
	}
}));
