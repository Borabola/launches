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
		<Box
			className={classes.pageWrap}
			data-testid="wrapId"
		>
			<Container className={classes.loginContainer}>
				{children}
			</Container>
		</Box>
	);
};
