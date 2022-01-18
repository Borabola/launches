import Box from "@mui/material/Box";
import { FC } from "react";
import { ReactComponent as LoaderSvg } from "../../../assets/common/loader.svg";
import { useStyles } from "./Loader.styles";

export const Loader: FC = () => {
	const classes = useStyles();

	return (
		<Box
			component="div"
			className={classes.loader}
		>
			<LoaderSvg />
		</Box>
	);
};
