import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	dropzoneStyle: {
		minHeight: theme.spacing(12),
		border: "1px solid #FFFFFF !important",
		borderRadius: "5px !important",
		backgroundColor: "#181B48 !important",
		color: "#FFFFFF !important",
		"& .MuiPaper-root": {
			margin: 0,
			backgroundColor: "transparent",
			boxShadow: "none",
			borderRadius: 0,
			color: "#FFFFFF",
			padding: "0 16px"
		}
	},
	previewChip: {
		minWidth: theme.spacing(20),
		maxWidth: theme.spacing(26.25),
	},
}));
