import { makeStyles } from "@mui/styles";
import theme from "theme";

export const useStyles = makeStyles(() => ({
	loader: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: theme.spacing(1.25),
		flexGrow: 1,

		"& svg": {
			width: theme.spacing(7),
			height: theme.spacing(7),
			animation: `$lds-roller 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
		}
	},
	"@keyframes lds-roller": {
		"0%": {
			transform: "rotate(0deg)",
		},
		"100%": {
			transform: "rotate(360deg)",
		}
	},
}));
