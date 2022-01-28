import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	tableBody: {
		width: "100%",

		"& .MuiTableCell-body": {
			width: "25%",
			color: theme.palette.primary.main,
		},
	},
	tableHead: {
		fontWeight: "bold",
		"& .MuiTableCell-head": {
			width: "25%",
			color: theme.palette.primary.main,
			fontSize: "1.125rem",
		},
	},
	tableRow: {
		width: "100%",
	},
	tableRowEven: {
		width: "100%",
		backgroundColor: theme.palette.primary.light
	},
	productTable: {
		color: theme.palette.primary.main,
		"& .MuiTableCell-root": {
			color: theme.palette.primary.main,
			width: "100%",
		},
	},
	tableCell: {
		color: theme.palette.primary.main,
		width: "100%",
		"& .MuiTableCell-root": {
			color: theme.palette.primary.main,
		},
	},
	productTitle: {
		textTransform: "uppercase"
	}
}));
