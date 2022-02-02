import { Paper, Theme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const Item = styled(Paper)(() => ({
	textAlign: "center",
	padding: 0,
	boxShadow: "none",
}));

export const useStyles = makeStyles((theme: Theme) => ({
	launchEmptyimg: {
		boxSizing: "border-box",
		width: "100%",
		maxWidth: theme.spacing(72.5),
		height: "16.88vw",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: theme.palette.secondary.dark,
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
		background: `linear-gradient(94.97deg,
			${theme.palette.info.light} 3.92%,
			${theme.palette.info.dark} 52.92%);`,
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
