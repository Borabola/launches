import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    pageWrapper: {

        fontFamily: theme.typography.b,//"Montserrat",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexGrow: 1,
        margin: "0 auto",
    },
}));
