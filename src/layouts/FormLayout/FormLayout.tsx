import {
	Box,
	Container
} from "@material-ui/core";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC } from "react";
import { Props } from "./FormLayout.types";

const useStyles = makeStyles((theme: Theme) => ({
	pageWrap: {
		display: "flex",
		flexDirection: "column",
		height: "100vh",
		justifyContent: "center",
		flexGrow: 1
	},
	formContainer: {
		maxWidth: theme.breakpoints.values.sm,
	}
}));

export const FormLayout: FC<Props> = ({ children }) => {
	const classes = useStyles();
	return (
		<Box className={classes.pageWrap}>
			<Container maxWidth="sm" >
				{children}
			</Container>
		</Box>
	);
};
