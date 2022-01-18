import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	pageWrapper: {
		position: "relative",
		padding: 0,
		display: "flex",
		flexDirection: "column",
		minHeight: "100vh",
	},
	pageContent: {
		padding: theme.spacing(
			29.5,
			16.25,
			12.5
		), //"118px 130px 100px",
		marginTop: theme.spacing(21.25),
		maxWidth: theme.spacing(180),
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		backgroundColor: "#1C2056",
		[theme.breakpoints.down("lg")]: {
			marginTop: theme.spacing(-25),
			padding: theme.spacing(25),
		},
		[theme.breakpoints.down("md")]: {
			marginTop: theme.spacing(-5),
			padding: theme.spacing(5),
		},
	},
	errorsBlock: {
		width: "100%"

	},
	pageContainer: {
		"&.MuiContainer-root": {
			maxWidth: theme.breakpoints.values.lg,
		}
	}
}));
