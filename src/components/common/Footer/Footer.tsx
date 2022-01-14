import { Theme } from "@material-ui/core";
import { Link, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../../../assets/common/logo.svg";
import { AppRoute } from "../../../utils/const";

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
	footerCopyright: {
		color: "#C0C0C0",

	}
}));

export const Footer: FC = () => {
	const classes = useStyles();
	const date = new Date();

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
