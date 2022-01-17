import {
	Box, Container, Link
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { PageLayout } from "../../layouts/PageLayout";
import { AppRouteEnum } from "../../types/Enums";

const useStyles = makeStyles(() => ({
	pageWrapper: {
		fontFamily: "Montserrat",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		flexGrow: 1,
		margin: "0 auto",
	},
}));

export const NotFound: FC = () => {
	const classes = useStyles();

	return (
		<PageLayout>
			<Box
				component="div"
				className={classes.pageWrapper}
			>
				<Container maxWidth="lg">
					<h1 >Page not found</h1>
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

export default NotFound;
