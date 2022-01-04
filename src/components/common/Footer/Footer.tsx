import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppRoute } from "../../../utils/const";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Theme } from "@material-ui/core";
import { Typography, Link } from "@mui/material";
import { ButtonUnstyled } from "@mui/core";
import { useAuth } from "../../../contexts/AuthContext";
import { IValue } from "../../../contexts/AuthContext.types";
import { ReactComponent as LogoSvg } from "../../../assets/common/logo.svg";

const useStyles = makeStyles((theme: Theme) => ({
	footer: {
		position: "relative",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		border: 0,
		minHeight: 100,
		padding: "0 80px",
		background: "#181B48",
		[theme.breakpoints.down("sm")]: {
			padding: "15px",
		},
	},
	footerContainer: {
		display: "frlex",
		flexDirection: "column"
	},
	footerMenu: {
		maxWidth: "1180px",
		padding: "20px 0",
		margin: "0 auto",
		display: "flex",
		alignItems: "center",

	},
	footerMenuLink: {
		display: "inline-flex",
		textDecoration: "none",
		transition: "0.3s ease",
		marginRight: "30px !important",
		"&:hover": {
			opacity: "0.9",
		},
	},

	footerWrapper: {
		width: "100%",
		maxWidth: "1180px",
		margin: "0 auto",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column"
		},
	},
	loginWrap: {
		display: "flex",
		alignItems: "center",
	},
	footerLink: {
		width: "49px",
		height: "55px",
		transition: "0.3s ease",
		"&:hover": {
			opacity: "0.9",
		},

		"& svg": {
			width: "49px",
			height: "55px",
		},
		[theme.breakpoints.down("sm")]: {
			marginBottom: "30px",
		},
	},
	footerLoginLink: {
		color: theme.palette.info.main,
		fontSize: "18px",
		textTransform: "none",
		transition: "0.3s ease",
		"&:hover": {
			opacity: "0.7",
		},

	},
	footerCopyright: {
		color: "#C0C0C0",

	},
	logoutBtn: {
		padding: "3px 7px",
		background: "rgba(0,0,0,0)",
		border: "none",
		color: theme.palette.info.main,
		fontSize: "18px",
		transition: "0.3s ease",
		"&:hover": {
			opacity: "0.7",
		},
	}
}));

type IAuth = Pick<IValue, "currentUser" | "logout">;

export const Footer: FC = () => {
	const classes = useStyles();
	const date = new Date();


	const { currentUser,
		logout } = useAuth() as IAuth;

	const onLogoutClick = () => logout();

	return (
		<Box
			component="div"
			className={classes.footerContainer}
		>

			<Box
				component="div"
				className={classes.footer}
			>

				<Box
					component="div"
					className={classes.footerWrapper}
				>
					<Link
						component={RouterLink}
						to={AppRoute.ROOT}
						className={classes.footerLink}
					>

						<LogoSvg />
					</Link>
					<Box className={classes.loginWrap}>
						{currentUser &&
							<>
								<Typography
									variant="body1"
									component="div"
									className={classes.footerCopyright}
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

						{(!currentUser) && <Link
							to={AppRoute.LOGIN}
							component={RouterLink}
							className={classes.footerLoginLink}
						>
							Login
                         </Link>}

					</Box>

					<Typography
						variant="body1"
						component="div"
						className={classes.footerCopyright}
					>
						© {date.getFullYear()} Copyright
					</Typography>
				</Box>
			</Box>
		</Box>

	);
};
