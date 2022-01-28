import {
	Button, Container, Typography
} from "@mui/material";
import Box from "@mui/material/Box";
import { FC } from "react";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { AppRouteEnum } from "../../../types/Enums";
import { useStyles } from "./MainHero.styles";

export const MainHero: FC = () => {
	const intl = useIntl();
	const classes = useStyles();

	return (
		<Box
			component="div"
			className={classes.heroWrapper}
		>
			<Container maxWidth="lg">
				<Box
					component="div"
					className={classes.heroTextWrapper}
				>
					<Typography
						variant="h1"
						mb="30px"
						color="primary"
					>
						{intl.formatMessage({ id: "mainHeroTitle" })}
					</Typography>

					<Typography
						variant="h5"
						mb="50px"
						className={classes.heroAbout}
					>
						{intl.formatMessage({ id: "mainHeroSubTitle" })}
					</Typography>

					<Button
						variant="contained"
						component={Link}
						to={AppRouteEnum.ROOT}
						className={classes.pageLink}
					>
						{intl.formatMessage({ id: "mainHeroButton" })}
					</Button>

				</Box>
			</Container>
		</Box>
	);
};
