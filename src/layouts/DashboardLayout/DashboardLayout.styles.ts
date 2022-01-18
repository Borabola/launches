import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	pageWrap: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	},
	formContainer: {
		"&.MuiContainer-root": {
			maxWidth: theme.breakpoints.values.lg,
		}
	}
}));
