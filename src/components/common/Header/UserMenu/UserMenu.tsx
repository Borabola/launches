import { Box, Link } from "@mui/material";
import { FC } from "react";
import { useIntl } from "react-intl";
import { Link as RouterLink } from "react-router-dom";
import { AppRouteEnum } from "../../../../types/Enums";
import { useStyles } from "./UserMenu.styles";

export const UserMenu: FC = () => {
	const classes = useStyles();
	const intl = useIntl();

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
				{intl.formatMessage({ id: "dashboardLink" })}
			</Link>
			<Link
				component={RouterLink}
				underline="hover"
				to={AppRouteEnum.ADDPRODUCT_PAGE}
				className={classes.menuLink}
			>
				{intl.formatMessage({ id: "addNewProduct" })}
			</Link>
		</Box>
	);
};
