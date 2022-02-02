import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	tableImg: {
		position: "relative",
		maxWidth: theme.spacing(31.25),
		height: "auto",
		maxHeight: theme.spacing(31.25),
		overflow: "hidden",
	},
}));
