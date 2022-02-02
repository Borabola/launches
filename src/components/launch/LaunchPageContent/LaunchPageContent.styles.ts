import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	launchContentWrap: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		color: theme.palette.secondary.main,

		"& h5": {
			color: theme.palette.primary.main,
		}
	},
	launchLineWrap: {
		display: "block",
	},
	launchVideoWrap: {
		widthh: "100%",
		height: "inherit",
	},
	subTitle: {
		marginBottom: theme.spacing(2.5),
	},
	text: {
		marginBottom: theme.spacing(0.625),
		display: "inline"
	},

}));
