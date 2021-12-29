import {FC} from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import { AppRoute } from "../../utils/const";
import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { PageLayout } from "../../layouts/PageLayout";

const useStyles = makeStyles( () => ({
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
						to={AppRoute.ROOT}
					>
						Link to Main Page
					</Link>
				</Container>
			</Box>

		</PageLayout>
	);
};

export default NotFound;