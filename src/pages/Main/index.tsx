
import {
	FC, useEffect, useState 
} from "react";
//import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import {
	Container, Box, Theme 
} from "@mui/material";
import { Header } from "../../components/common/Header";
import { Footer } from "../../components/common/Footer";
import { Loader } from "../../components/common/Loader";
import { MainHero } from "../../components/main/MainHero";
import { EventsSwiper } from "../../components/main/EventsSwiper";
import { LaunchesBlock } from "../../components/main/LaunchesBlock";
//import { fetchLaunchList } from "redux/launchData/fetches";
//import { fetchEventList } from "redux/eventData/fetches";
import { requireAuthorization } from "../../redux/auth/sliceReducer";
import { AuthorizationStatus, launchQnt } from "../../utils/const";
import { useAuth } from "../../contexts/AuthContext";
import { useGetEventsQuery, useGetLaunchesQuery } from "../../services/api";
import { useAppDispatch } from "../../App/hooks";


const useStyles = makeStyles((theme: Theme) => ({
	pageWrapper: {
		position: "relative",
		padding: 0,
		display: "flex",
		flexDirection: "column",
		minHeight: "100vh",
	},
	pageContent: {
		padding: "118px 130px 100px",
		marginTop: "-170px",
		maxWidth: "1440px",
		minHeight: "100px", // delete
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		backgroundColor: "#1C2056",
		[theme.breakpoints.down("lg")]: {
			marginTop: "-50px",
			padding: "50px",
		},
		[theme.breakpoints.down("md")]: {
			marginTop: "-20px",
			padding: "20px",
		},
	},
	errorsBlock: {
		fontSize: 0,
		color: "rgba(0,0,0,0)",
		opacity: 0,
		visibility: "hidden"

	}
}));

const Main: FC = () => {
	const classes = useStyles();
	const { data: events=null, isFetching: isEventsLoaded } = useGetEventsQuery();
	const { data: launches=null, isFetching: isLaunchesLoaded } = useGetLaunchesQuery();
	const authContext = useAuth();
	if( authContext === null ) {
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
		setShowenLaunchesQnt((launches && isLaunchesLoaded) ? launches.length: 0);
	};
	const onShowMoreClick = () => {
		setShowenLaunchesQnt(showenLaunchesQnt + launchQnt);
	};

	return (
		<div className={classes.pageWrapper}>
			<Header isMain />
			<MainHero onShowAllClick={onShowAllClick} />

			<Container maxWidth="lg">
				{(isEventsLoaded && isLaunchesLoaded) ?
					<section className={classes.pageContent}>

						{events && isEventsLoaded && <EventsSwiper events={events} />}

						{isLaunchesLoaded && launches &&
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