
import {
	Box, Container, Theme
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
	FC, useEffect, useState
} from "react";
import { useAppDispatch } from "../../App/hooks";
import { Footer } from "../../components/common/Footer";
import { Header } from "../../components/common/Header";
import { Loader } from "../../components/common/Loader";
import { EventsSwiper } from "../../components/main/EventsSwiper";
import { LaunchesBlock } from "../../components/main/LaunchesBlock";
import { MainHero } from "../../components/main/MainHero";
import { useAuth } from "../../contexts/AuthContext";
import { requireAuthorization } from "../../redux/auth/sliceReducer";
import { useGetEventsQuery, useGetLaunchesQuery } from "../../services/api";
import { AuthorizationStatus, launchQnt } from "../../utils/const";


const useStyles = makeStyles((theme: Theme) => ({
	pageWrapper: {
		position: "relative",
		padding: 0,
		display: "flex",
		flexDirection: "column",
		minHeight: "100vh",
	},
	pageContent: {
		padding: theme.spacing(
			29.5,
			16.25,
			12.5
		), //"118px 130px 100px",
		marginTop: theme.spacing(21.25),
		maxWidth: theme.spacing(180),
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		backgroundColor: "#1C2056",
		[theme.breakpoints.down("lg")]: {
			marginTop: theme.spacing(-25),
			padding: theme.spacing(25),
		},
		[theme.breakpoints.down("md")]: {
			marginTop: theme.spacing(-5),
			padding: theme.spacing(5),
		},
	},
	errorsBlock: {
		width: "100%"

	}
}));

const Main: FC = () => {
	const classes = useStyles();
	const { data: events = null, isFetching: isEventsFetching } = useGetEventsQuery();
	const { data: launches = null, isFetching: isLaunchesFetching } = useGetLaunchesQuery();

	const authContext = useAuth();
	if (authContext === null) {
		return null;
	}
	const { currentUser } = authContext;
	const dispatch = useAppDispatch();

	const [showenLaunchesQnt, setShowenLaunchesQnt] = useState(launchQnt);

	useEffect(
		() => {
			if (currentUser) {
				dispatch(requireAuthorization(AuthorizationStatus.AUTH));
			}
		},
		[currentUser]
	);

	const onShowAllClick = () => {
		setShowenLaunchesQnt((launches && isLaunchesFetching) ? launches.length : 0);
	};
	const onShowMoreClick = () => {
		setShowenLaunchesQnt(showenLaunchesQnt + launchQnt);
	};

	return (
		<div className={classes.pageWrapper}>
			<Header isMain />
			<MainHero onShowAllClick={onShowAllClick} />

			<Container maxWidth="lg">
				{(!isEventsFetching) ?
					<section className={classes.pageContent}>

						{events && <EventsSwiper events={events} />}

						{launches &&
							<LaunchesBlock
								launches={launches}
								onShowMore={onShowMoreClick}
								showenLaunchesQnt={showenLaunchesQnt}
							/>}
					</section>
					:
					<Box className={classes.errorsBlock}>
						<Loader />
					</Box>
				}
			</Container>
			<Footer />
		</div>
	);
};

export default Main;
