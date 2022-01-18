import { Box, Link } from "@mui/material";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppRouteEnum } from "../../../../types/Enums";
import { useStyles } from "./UserMenu.styles";

export const UserMenu: FC = () => {
	const classes = useStyles();

	return (
		<Box
			component="div"
			className={classes.menuWrap}
		>
			<Link
				component={RouterLink}
				underline="hover"
				to={AppRouteEnum.DASHBOARD}
				className={classes.menuLink}
			>
				Dashboard
			</Link>
			<Link
				component={RouterLink}
				underline="hover"
				to={AppRouteEnum.ADDPRODUCT_PAGE}
				className={classes.menuLink}
			>
				Add New Product
			</Link>
		</Box>
	);
};
