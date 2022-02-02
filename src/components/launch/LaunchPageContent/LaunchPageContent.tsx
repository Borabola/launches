import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useIntl } from "react-intl";
import { useStyles } from "./LaunchPageContent.styles";
import type { Props } from "./LaunchPageContent.types";

export const LaunchPageContent: FC<Props> = ({ launch }) => {
	const classes = useStyles();
	const intl = useIntl();

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
				className={classes.subTitle}
			>
				{intl.formatMessage({ id: "overview" })}
			</Typography>

			<Box className={classes.launchContentWrap}>
				{launch.launchDestination &&
					<Box className={classes.launchLineWrap}>
						<Typography
							variant="h5"
							component="span"
							className={classes.text}
						>
							{intl.formatMessage({ id: "destination" })}:
						</Typography>
						<Typography
							component="span"
							className={classes.text}
						>
							{" " + launch.launchDestination}
						</Typography>
					</Box>}
				{launch.launchMission &&
					<Box className={classes.launchLineWrap}>
						<Typography
							variant="h5"
							component="span"
							className={classes.text}
						>
							{intl.formatMessage({ id: "mission" })}:
						</Typography>
						<Typography
							variant="h5"
							component="span"
							className={classes.text}
						>
							{" " + launch.launchMission}
						</Typography>
					</Box>}

			</Box>
		</Box>
	);
};
