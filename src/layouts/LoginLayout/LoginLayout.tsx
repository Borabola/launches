import {
	Box,
	Container
} from "@material-ui/core";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC } from "react";
import { Props } from "./LoginLayout.types";

const useStyles = makeStyles((theme: Theme) => ({
	pageWrap: {
		display: "flex",
		flexDirection: "column",
		height: "100vh",
		justifyContent: "center"
	},
	formContainer: {
		maxWidth: theme.breakpoints.values.sm,
	}
}));

export const LoginLayout: FC<Props> = ({ children }) => {
	const classes = useStyles();
	return (
		<Box className={classes.pageWrap}>
			<Container maxWidth="sm" >
				{children}
			</Container>
		</Box>
	);
};
