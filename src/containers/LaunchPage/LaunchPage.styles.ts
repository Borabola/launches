import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	pageContent: {
		position: "relative",
		padding: theme.spacing(
			12.5,
			16.25,
			12.5
		),
		marginTop: theme.spacing(21.25),
		maxWidth: theme.spacing(180),
		minHeight: theme.spacing(25),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: theme.palette.primary.dark,
		zIndex: 2,
		[theme.breakpoints.down("lg")]: {
			marginTop: theme.spacing(-25),
			padding: theme.spacing(25),
		},
		[theme.breakpoints.down("md")]: {
			marginTop: theme.spacing(-5),
			padding: theme.spacing(5),
		},
	},
	pageContainer: {
		"&.MuiContainer-root": {
			maxWidth: theme.breakpoints.values.lg,
		}
	}
}));
