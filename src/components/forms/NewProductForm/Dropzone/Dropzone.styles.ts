import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	dropzoneStyle: {
		minHeight: theme.spacing(12),
		border: `1px solid ${theme.palette.secondary.main} !important`,
		borderRadius: `${theme.spacing(0.625)} !important`,
		backgroundColor: `${theme.palette.background.default} !important`,
		color: `${theme.palette.secondary.main} !important`,
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
