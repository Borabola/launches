import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	launchEmptyimg: {
		boxSizing: "border-box",
		width: "100%",
		maxWidth: "580px",
		height: "16.88vw",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#3F3881",
		[theme.breakpoints.down("md")]: {
			height: "40vw",
		},
		[theme.breakpoints.down("sm")]: {
			height: "70vw",
		},

		"& svg": {
			width: theme.spacing(19.25),
			height: theme.spacing(19.25),
			opacity: 0.2,
		},
	},
	launchImg: {
		width: "100%",
		maxWidth: "100%",
		objectFit: "cover",
		height: "16.88vw",
		overflow: "hidden",
	},
	launchTimeBlock: {
		padding: theme.spacing(
			1.25,
			3.75
		),
		marginBottom: theme.spacing(3.75),
		marginTop: "calc(-50% - 20px)",
		display: " inline-block",
		justifyContent: "center",
		background: "linear-gradient(94.97deg, #8E2DE2 3.92%, #4A00E0 52.92%);",
		borderRadius: theme.spacing(6.25),
	},
	launchNameClass: {
		textDecoration: "none",
		transition: "0.3s ease",
		"&:hover": {
			opacity: "0.9",
		},
	},
	text: {
		marginBottom: theme.spacing(0.625)
	}
}));
