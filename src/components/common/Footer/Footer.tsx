import { Link, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { FC } from "react";
import { useIntl } from "react-intl";
import { Link as RouterLink } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../../../assets/common/logo.svg";
import { AppRouteEnum } from "../../../types/Enums";
import { useStyles } from "./Footer.styles";



export const Footer: FC = () => {
	const classes = useStyles();
	const intl = useIntl();
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
						to={AppRouteEnum.ROOT}
						className={classes.footerLink}
					>
						<LogoSvg />
					</Link>
					<Typography
						variant="body1"
						component="div"
						className={classes.footerCopyright}
						data-testid="test_id_year"
					>
						© {date.getFullYear()} {intl.formatMessage({ id: "copyright" })}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};
