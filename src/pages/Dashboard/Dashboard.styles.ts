import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    tableImg: {
        position: "relative",
        maxWidth: theme.spacing(31.25),
        height: "auto",
        maxHeight: theme.spacing(31.25),
        overflow: "hidden",
        "&::after": {
            position: "absolute",
            content: "ghghghg",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bacgroundColor: "rgba(255, 0, 0, 0, 0.3)",
        }

    },
}));
