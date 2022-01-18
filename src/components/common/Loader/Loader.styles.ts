import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
	loader: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "10px",
		flexGrow: 1,

		"& svg": {
			width: "56px",
			height: "56px",
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
