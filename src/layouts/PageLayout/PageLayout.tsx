import { Box } from "@material-ui/system";
import { FC } from "react";
import { Footer } from "../../components/common/Footer";
import { Header } from "../../components/common/Header";
import { useStyles } from "./PageLayout.styles";
import { Props } from "./PageLayout.types";

export const PageLayout: FC<Props> = ({ children }) => {
	const classes = useStyles();
	return (
		<Box className={classes.pageWrapper}>
			<Header />
			{children}
			<Footer />
		</ Box>
	);
};
