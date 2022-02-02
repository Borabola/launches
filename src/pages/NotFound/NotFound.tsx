import {
	Box, Container, Link, Typography
} from "@mui/material";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { PageLayout } from "../../layouts/PageLayout";
import { AppRouteEnum } from "../../types/Enums";
import { useStyles } from "./NotFound.styles";

export const NotFound: FC = () => {
	const classes = useStyles();

	return (
		<PageLayout>
			<Box
				component="div"
				className={classes.pageWrapper}
			>
				<Container maxWidth="lg">
					<Typography variant="h3">
						Page not found
					</Typography>
					<Link
						component={RouterLink}
						to={AppRouteEnum.ROOT}
					>
						Link to Main Page
					</Link>
				</Container>
			</Box>

		</PageLayout>
	);
};
