import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	pageContent: {
		"& fieldset": {
			borderColor: theme.palette.secondary.main,
			"&:hover": {
				borderColor: theme.palette.secondary.main,
			},
		},
		"& .MuiOutlinedInput-root": {
			"& input": {
				color: theme.palette.secondary.main,
				borderColor: theme.palette.secondary.main,

				"&::placeholder": {
					color: theme.palette.secondary.main,
				},
			},
			"& fieldset": {
				borderColor: theme.palette.secondary.main,
			},
			"&:hover fieldset": {
				borderColor: theme.palette.info.light,
			},
			"&.Mui-focused fieldset": {
				borderColor: theme.palette.info.dark,
			},
			"& input::placeholder": {
				color: theme.palette.info.dark,
			},
			dropzoneStyle: {
				borderRadius: `${theme.spacing(0.25)} !important`,
			},
		},
		"& label.Mui-focused": {
			color: theme.palette.info.dark,
		},
		"& .react-formik-ui .form-element .dropzone-wrapper .dropzone": {
			borderColor: theme.palette.secondary.main,
			backgroundcolor: theme.palette.primary.main,
		},
	},
	textField: {
		"&::placeholder": {
			borderColor: theme.palette.secondary.main,
		},
		"&:hover": {
			borderColor: theme.palette.secondary.main,
		},
		"label": {
			color: theme.palette.secondary.main,
		}
	},
	fileField: {
		"& label": {
			display: "none",
		}
	},
	dropzoneStyle: {
		minHeight: theme.spacing(12),
		border: `${theme.spacing(0.125)} solid ${theme.palette.secondary.main} !important`,
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
