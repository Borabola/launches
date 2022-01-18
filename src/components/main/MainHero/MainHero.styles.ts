import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BgImage from "../../../assets/common/bg_hero.png";

export const useStyles = makeStyles((theme: Theme) => ({
	button: {
		display: "inline-block",
		padding: theme.spacing(
			3.375,
			10
		),
		fontFamily: "Montserrat",
		fontWeight: "700",
		fontSize: "1.25rem",
		color: theme.palette.common.white,
		textDecoration: "none",
		textTransform: "capitalize",
		background: "linear-gradient(93.72deg, #8E2DE2 9.41%, #4A00E0 86.1%)",
		borderRadius: theme.spacing(6.25),
		transition: "0.3s ease",

		"&:hover": {
			opacity: 0.8,
		},
		"&button": {
			borderRadius: theme.spacing(6.25),
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "1.25rem",
			padding: theme.spacing(
				2.5,
				5
			),
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.125rem",
			padding: theme.spacing(
				1.25,
				3.75
			),
		},
	},
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
		fontFamily: "Montserrat",
		width: "100%",
		marginTop: theme.spacing(-16),
		display: "flex",
		backgroundColor: theme.palette.background.default,
		backgroundImage: `url("${BgImage}")`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "100%",
		backgroundPosition: "top center",
		[theme.breakpoints.down("md")]: {
			height: "auto",
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
		fontFamily: "Montserrat",
		paddingTop: "29%",
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
	pageLink: {
		display: "inline-block",
		padding: theme.spacing(
			3.375,
			10
		), //"27px 80px",
		fontFamily: "Montserrat",
		fontWeight: "700",
		fontSize: "1.25rem",
		color: theme.palette.common.white,
		textDecoration: "none",
		textTransform: "capitalize",
		background: "linear-gradient(93.72deg, #8E2DE2 9.41%, #4A00E0 86.1%)",
		borderRadius: theme.spacing(6.25),
		transition: "0.3s ease",

		"&.MuiButtonBase-root-MuiButton-root": {
			fontFamily: "Montserrat",
		},

		"&:hover, &:focus": {
			opacity: "0.8",
		},
		"& button": {
			borderRadius: theme.spacing(6.25),
		},
		[theme.breakpoints.down("md")]: {
			fontSize: theme.spacing(2.5),
			padding: theme.spacing(
				2.5,
				5
			),
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "1.125rem",
			padding: theme.spacing(
				1.25,
				3.75
			),
		},
	}
}));
