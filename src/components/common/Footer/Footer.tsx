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
		minHeight: theme.spacing(12.5),
		padding: theme.spacing(
			0,
			10
		),
		background: "#181B48",
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(2),
		},
	},
	footerContainer: {
		display: "frlex",
		flexDirection: "column"
	},
	footerMenu: {
		maxWidth: theme.spacing(147.5),
		padding: theme.spacing(
			2.5,
			0
		),
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
		maxWidth: theme.spacing(147.5),
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
		width: theme.spacing(6.125),
		height: theme.spacing(6.875),
		transition: "0.3s ease",
		"&:hover": {
			opacity: "0.9",
		},

		"& svg": {
			width: theme.spacing(6.125),
			height: theme.spacing(6.875),
		},
		[theme.breakpoints.down("sm")]: {
			marginBottom: theme.spacing(3.75),
		},
	},
	footerLoginLink: {
		color: theme.palette.info.main,
		fontSize: "1.125rem",
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
		padding: theme.spacing(
			0.375,
			1
		),
		background: "rgba(0,0,0,0)",
		border: "none",
		color: theme.palette.info.main,
		fontSize: "1.125rem",
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

						{(!currentUser) &&
							<Link
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
