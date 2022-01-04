import {
	Box, Link, Theme, Typography
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ReactComponent as ArrowLeftSvg } from "../../../assets/common/arrow_left.svg";
import { ReactComponent as LogoSvg } from "../../../assets/common/logo.svg";
import { useAuth } from "../../../contexts/AuthContext";
import { AppRoute } from "../../../utils/const";
import type { IAuth, Props } from "./Header.types";
import UserMenu from "./UserMenu";

const useStyles = makeStyles((theme: Theme) => ({
	header: {
		position: "relative",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		border: 0,
		minHeight: theme.spacing(12.5),
		padding: theme.spacing(
			0,
			3.75
		),
		background: "rgba(0, 0, 0, 0.2)",
		zIndex: 1,
	},
	headerContainer: {
		width: "100%",
		maxWidth: theme.spacing(147.5),
		display: "flex",
		flexDirection: "column",
	},

	headerWrapper: {
		position: "relative",
		maxWidth: theme.spacing(147.5),
		display: "flex",
		justifyContent: "space-between",
		[theme.breakpoints.down("md")]: {
			maxWidth: "100%",
		},
	},
	headerBack: {
		display: "flex",
		alignItems: "center",
		fontWeight: "bold",
		color: theme.palette.primary.main,
		textDecoration: "none",
		textTransform: "capitalize",
		transition: "0.3s ease",
		cursor: "pointer",
		"&:hover": {
			opacity: "0.7",

			"& svg": {
				transform: "translateX(-5px)",
			},
		},
		"& svg": {
			width: theme.spacing(3.5),
			height: theme.spacing(1.75),
			marginRight: theme.spacing(1.25),
			transition: "0.3s ease",
		},
	},
	headerLink: {
		position: "absolute",
		right: 0,
		top: 0,
		width: "95px",
		height: "107px",
		transition: "0.3s ease",
		"&:hover": {
			opacity: "0.8",
		},
		[theme.breakpoints.down("md")]: {
			right: "0",
		},
	},
	headerWrapperMain: {
		position: "absolute",
		display: "flex",
		justifyContent: "center",
		alignItems: "end",
		bottom: "-55.6%",
		left: "50%",
		width: "95px",
		height: "107px",
		transform: "translateX(-50%)",
	},
}));

export const Header: FC<Props> = ({ isMain = false }) => {
	const classes = useStyles();
	const { currentUser } = useAuth() as IAuth;

	return (
		<Box
			component="div"
			className={classes.header}
		>
			{isMain ? (
				<Box className={classes.headerContainer}>
					<Box className={classes.headerWrapperMain}>
						<LogoSvg />
					</Box>
					{currentUser && <UserMenu />}
				</Box>
			) : (
				<Box className={classes.headerContainer}>
					<Box className={classes.headerWrapper}>
						<Link
							component={RouterLink}
							to={AppRoute.ROOT}
							className={classes.headerBack}
						>
							<ArrowLeftSvg />
							<Typography variant="h3">Back To Home</Typography>
						</Link>
						<Link
							component={RouterLink}
							to={AppRoute.ROOT}
							className={classes.headerLink}
						>
							<LogoSvg />
						</Link>
					</Box>
					{currentUser && <UserMenu />}
				</Box>
			)}
		</Box>
	);
};
