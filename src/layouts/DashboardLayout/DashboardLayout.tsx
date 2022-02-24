import {
	Box,
	Container
} from "@material-ui/core";
import { Typography } from "@mui/material";
import { FC } from "react";
import { useIntl } from "react-intl";
import { PageLayout } from "../PageLayout";
import { useStyles } from "./DashboardLayout.styles";
import { Props } from "./DashboardLayout.types";

export const DashboardLayout: FC<Props> = ({ children }) => {
	const classes = useStyles();
	const intl = useIntl();

	return (
		<PageLayout>
			<Box
				className={classes.pageWrap}
				data-testid="wrapId"
			>
				<Container className={classes.formContainer} >
					<Typography
						variant="h2"
						mb="30px"
					>{intl.formatMessage({ id: "productList" })}
					</Typography>
					{children}
				</Container>
			</ Box>
		</PageLayout>
	);
};
