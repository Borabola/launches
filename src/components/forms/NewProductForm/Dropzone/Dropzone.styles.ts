import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	dropzoneStyle: {
		minHeight: theme.spacing(12),
		border: `${theme.spacing(0.125)} solid ${theme.palette.secondary.main}`,
		borderRadius: `${theme.spacing(0.625)}`,
		backgroundColor: `${theme.palette.background.default}`,
		color: `${theme.palette.secondary.main} `,
		"& .MuiPaper-root": {
			margin: 0,
			backgroundColor: theme.palette.background.paper,
			boxShadow: "none",
			borderRadius: 0,
			color: theme.palette.secondary.main,
			padding: theme.spacing(
				0,
				2
			)
		}
	},
	previewChip: {
		minWidth: theme.spacing(20),
		maxWidth: theme.spacing(26.25),
	},
}));
