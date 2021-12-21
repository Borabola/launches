import {FC} from "react";
import { Box } from "@material-ui/system";
import { makeStyles } from "@mui/styles";
import { Footer } from "components/common/Footer";
import { Header } from "components/common/Header";
import { Props } from "./PageLayout.types";


const useStyles = makeStyles({
	pageWrapper: {
		position: "relative",
		padding: "0",
		display: "flex",
		flexDirection: "column",
		minHeight: "100vh",
	},
});

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
