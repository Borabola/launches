import { FC } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import type { Props } from "./LaunchPageContent.types";

const useStyles = makeStyles({
	launchContentWrap: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		color: "#fff",

		"& h5": {
			color: "#F1EBFF",
		}
	},
	launchLineWrap: {
		display: "block",
	},
	launchVideoWrap: {
		widthh: "100%",
		height: "inherit",
	}
});

export const LaunchPageContent: FC<Props> = ({ launch }) => {
	const classes = useStyles();

	const currentVideoUrl = (Array.isArray(launch.videoURLs)
		? launch.videoURLs[0]
		: launch.videoURLs);

	return (
		<Box>
			{currentVideoUrl &&
				<iframe
					className={classes.launchVideoWrap}
					src={currentVideoUrl}
					frameBorder="0"
					allowFullScreen
					title="Embedded youtube"
				/>
			}

			<Typography
				variant="h2"
				mb="20px"
			>
				Overview
			</Typography>

			<Box className={classes.launchContentWrap}>
				{launch.launchDestination &&
					<Box className={classes.launchLineWrap}>
						<Typography
							variant="h5"
							component="span"
							mb="5px"
							display="inline"
						>
							Destination:
						</Typography>
						<Typography
							component="span"
							mb="5px"
							display="inline"
						>
							{" " + launch.launchDestination}
						</Typography>
					</Box>}
				{launch.launchMission &&
					<Box className={classes.launchLineWrap}>
						<Typography
							variant="h5"
							component="span"
							mb="5px"
							display="inline"
						>
							Mission:
						</Typography>
						<Typography
							variant="h5"
							component="span"
							mb="5px"
							display="inline"
						>
							{" " + launch.launchMission}
						</Typography>
					</Box>}

			</Box>
		</Box>
	);
};
