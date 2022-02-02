import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
	pageContent: {
		"& fieldset": {
			borderColor: theme.palette.secondary.main,
		},
		"& .MuiOutlinedInput-root": {
			"&:hover fieldset": {
				borderColor: theme.palette.info.light,
			},
			"&.Mui-focused fieldset": {
				borderColor: theme.palette.info.dark,
			},
			"& input::placeholder": {
				color: theme.palette.info.dark,
			},
		},
		"& label.Mui-focused": {
			color: theme.palette.info.dark,
		},
	},
	textField: {
		"&::placeholder": {
			borderColor: theme.palette.secondary.main,
		},
		"&:hover": {
			borderColor: theme.palette.secondary.main,
		}
	},
}));
