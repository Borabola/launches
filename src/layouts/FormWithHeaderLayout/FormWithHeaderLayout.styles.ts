import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	pageWrap: {
		display: "flex",
		flexDirection: "column",
		minHeight: "100vh",
		justifyContent: "center",
		flexGrow: 1
	},
	loginContainer: {
		"&.MuiContainer-root": {
			maxWidth: theme.breakpoints.values.sm,
		}
	}
}));
