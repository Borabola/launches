import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { FC } from "react";
//import { useIntl } from "react-intl";
import { ReactComponent as LoaderSvg } from "../../../assets/common/loader.svg";
import { useStyles } from "./Loader.styles";

export const Loader: FC = () => {
	const classes = useStyles();
	//const intl = useIntl();

	return (
		<>
			<Box
				component="div"
				className={classes.loader}
			>
				<LoaderSvg />
			</Box>
			<Typography
				component="span"
				className="visually-hidden"
			>
				{/*intl.formatMessage({ id: "loading" })*/}
			</Typography>
		</>
	);
};
