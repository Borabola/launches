import {
	Box,
	Container
} from "@material-ui/core";
import { PageLayout } from "layouts/PageLayout";
import { FC } from "react";
import { useStyles } from "./FormWithHeaderLayout.styles";
import { Props } from "./FormWithHeaderLayout.types";

export const FormWithHeaderLayout: FC<Props> = ({ children }) => {
	const classes = useStyles();

	return (
		<PageLayout>
			<Box
				className={classes.pageWrap}
				data-testid="wrapId"
			>
				<Container className={classes.loginContainer}>
					{children}
				</Container>
			</Box>
		</PageLayout>
	);
};
