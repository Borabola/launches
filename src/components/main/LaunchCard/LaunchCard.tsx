import {
	Link, Paper, Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { format } from "date-fns";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ReactComponent as RocketSvg } from "../../../assets/common/rocketLogo.svg";
import { useStyles } from "./LaunchCard.styles";
import { Props } from "./LaunchCard.types";

const Item = styled(Paper)(() => ({
	textAlign: "center",
	padding: 0,
	boxShadow: "none",
}));

export const LaunchCard: FC<Props> = ({ launch }) => {
	const classes = useStyles();

	return (
		<Item>
			<Link
				component={RouterLink}
				to={`/rocket/${launch.rocketId}`}
			>
				{launch.launchImg ? (
					Array.isArray(launch.launchImg) ? (
						<img
							src={launch.launchImg[0]}
							alt={launch.launchName}
							width="580"
							height="324"
							className={classes.launchImg}
						/>
					) : (
						<img
							src={launch.launchImg}
							alt={launch.launchName}
							width="580"
							height="324"
							className={classes.launchImg}
						/>
					)
				) : (
					<div className={classes.launchEmptyimg}>
						<RocketSvg />
					</div>
				)}
			</Link>

			<div className={classes.launchTimeBlock}>
				<Typography variant="caption">
					<time
						dateTime={format(
							new Date(launch.launchDate),
							"yyyy-MM-dd"
						)}
					>
						{format(
							new Date(launch.launchDate),
							"MMM. d, yyyy, h:mm aaa"
						)}
					</time>
				</Typography>
			</div>
			<Link
				underline="hover"
				component={RouterLink}
				to={`/launch/${launch.id}`}
				className={classes.launchNameClass}
			>
				<Typography
					variant="h3"
					className={classes.text}
				>
					{launch.launchName}
				</Typography>
			</Link>
		</Item>

	);
};
