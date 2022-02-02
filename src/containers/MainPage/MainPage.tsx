
import { Box, Container } from "@mui/material";
import { FC } from "react";
import { Footer } from "../../components/common/Footer";
import { Header } from "../../components/common/Header";
import { Loader } from "../../components/common/Loader/Loader";
import { EventsSwiper } from "../../components/main/EventsSwiper";
import { LaunchesBlock } from "../../components/main/LaunchesBlock";
import { MainHero } from "../../components/main/MainHero";
import { useStyles } from "./MainPage.styles";
import type { Props } from "./MainPage.types";

export const MainPage: FC<Props> = ({ events, isEventsFetching }) => {
	const classes = useStyles();

	return (
		<Box className={classes.pageWrapper}>
			<Header isMain />
			<MainHero />
			<Container className={classes.pageContainer} >
				{(!isEventsFetching) ?
					<section className={classes.pageContent}>

						{events && <EventsSwiper events={events} />}

						<LaunchesBlock />
					</section>
					:
					<Box className={classes.errorsBlock}>
						<Loader />
					</Box>
				}
			</Container>
			<Footer />
		</Box>
	);
};
