import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	header: {
		position: "relative",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		border: 0,
		minHeight: theme.spacing(12.5),
		padding: theme.spacing(
			0,
			3.75
		),
		background: "rgba(0, 0, 0, 0.2)",
		zIndex: 1,
	},
	headerContainer: {
		width: "100%",
		maxWidth: theme.spacing(147.5),
		display: "flex",
		flexDirection: "column",
	},

	headerWrapper: {
		position: "relative",
		maxWidth: theme.spacing(147.5),
		display: "flex",
		justifyContent: "space-between",
		[theme.breakpoints.down("md")]: {
			maxWidth: "100%",
		},
	},
	headerBack: {
		display: "flex",
		alignItems: "center",
		fontWeight: "bold",
		color: theme.palette.primary.main,
		textDecoration: "none",
		textTransform: "capitalize",
		transition: "0.3s ease",
		cursor: "pointer",
		"&:hover": {
			opacity: "0.7",

			"& svg": {
				transform: "translateX(-5px)",
			},
		},
		"& svg": {
			width: theme.spacing(3.5),
			height: theme.spacing(1.75),
			marginRight: theme.spacing(1.25),
			transition: "0.3s ease",
		},
	},
	headerLink: {
		position: "absolute",
		right: 0,
		top: theme.spacing(5.75),
		width: theme.spacing(11.875),
		height: theme.spacing(13.375),
		transition: "0.3s ease",
		"&:hover": {
			opacity: "0.8",
		},
		[theme.breakpoints.down("md")]: {
			right: "0",
		},
	},
	headerWrapperMain: {
		position: "absolute",
		display: "flex",
		justifyContent: "center",
		alignItems: "end",
		bottom: "-55%",
		left: "50%",
		width: theme.spacing(11.875),
		height: theme.spacing(13.375),
		transform: "translateX(-50%)",
	},
	loginWrap: {
		position: "absolute",
		top: 0,
		left: "50%",
		transform: "translate(-50%, 0)",
		padding: theme.spacing(
			1,
			0,
			0
		),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		zIndex: 2,
	},
	headerStyled: {
		color: theme.palette.info.main,
	},
	logoutBtn: {
		padding: theme.spacing(
			0.375,
			1
		),
		background: "rgba(0,0,0,0)",
		border: "none",
		color: theme.palette.info.main,
		fontSize: "1.125rem",
		transition: "0.3s ease",
		"&:hover": {
			opacity: "0.7",
		},
		cursor: "pointer"
	},
	headerLoginLink: {
		color: theme.palette.info.main,
		fontSize: "1.125rem",
		textTransform: "none",
		transition: "0.3s ease",
		"&:hover": {
			opacity: "0.7",
		},
	},
}));
