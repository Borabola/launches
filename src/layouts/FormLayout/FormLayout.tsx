import {
	Box,
	Container
} from "@material-ui/core";
import { FC } from "react";
import { useStyles } from "./FormLayout.styles";
import { Props } from "./FormLayout.types";

export const FormLayout: FC<Props> = ({ children }) => {
	const classes = useStyles();
	return (
		<Box className={classes.pageWrap}>
			<Container className={classes.formContainer}>
				{children}
			</Container>
		</Box>
	);
};
