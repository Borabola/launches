import { ButtonUnstyled } from "@mui/core";
import {
	Box, Link, Typography
} from "@mui/material";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ReactComponent as ArrowLeftSvg } from "../../../assets/common/arrow_left.svg";
import { ReactComponent as LogoSvg } from "../../../assets/common/logo.svg";
import { useAuth } from "../../../contexts/AuthContext";
import { AppRouteEnum } from "../../../types/Enums";
import { useStyles } from "./Header.styles";
import type { IAuth, Props } from "./Header.types";
import UserMenu from "./UserMenu";

export const Header: FC<Props> = ({ isMain = false }) => {
	const classes = useStyles();
	const { currentUser, logout } = useAuth() as IAuth;
	const onLogoutClick = () => logout();

	return (
		<Box
			component="div"
			className={classes.header}
		>
			<Box className={classes.headerContainer}>
				<Box className={classes.loginWrap}>
					{currentUser &&
						<>
							<Typography
								variant="body1"
								component="div"
								className={classes.headerStyled}
							>
								Login as {"  " + currentUser}
							</Typography>
							<ButtonUnstyled
								color="primary"
								size="small"
								className={classes.logoutBtn}
								onClick={onLogoutClick}
							>Logout
							</ButtonUnstyled>
						</>}

					{(!currentUser) &&
						<Link
							to={AppRouteEnum.LOGIN}
							component={RouterLink}
							className={classes.headerLoginLink}
						>
							Login
						</Link>}

				</Box>
				{isMain ? (

					<Box className={classes.headerWrapperMain}>
						<LogoSvg />
					</Box>

				) : (

					<Box className={classes.headerWrapper}>
						<Link
							component={RouterLink}
							to={AppRouteEnum.ROOT}
							className={classes.headerBack}
						>
							<ArrowLeftSvg />
							<Typography variant="h3">Back To Home</Typography>
						</Link>
						<Link
							component={RouterLink}
							to={AppRouteEnum.ROOT}
							className={classes.headerLink}
						>
							<LogoSvg />
						</Link>
					</Box>

				)}
				{currentUser && <UserMenu />}
			</Box>
		</Box>
	);
};
