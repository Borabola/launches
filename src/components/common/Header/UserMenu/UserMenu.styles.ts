import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	menuWrap: {
		maxWidth: "1180px",
		padding: theme.spacing(
			2.5,
			0
		),
		margin: 0,
		display: "flex",
		alignItems: "center",
	},
	menuLink: {
		display: "inline-flex",
		textDecoration: "none",
		transition: "0.3s ease",
		marginRight: "30px !important",
		cursor: "pointer",

		"&:hover": {
			opacity: "0.9",
		},
	},
}));
