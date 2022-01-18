import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { format } from "date-fns";
import { FC } from "react";
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import { useIntl } from "react-intl";
import Swiper, { Navigation } from "swiper";
import "swiper/swiper.scss";
import { ReactComponent as RocketSvg } from "../../../assets/common/rocketLogo.svg";
import { ReactComponent as ArrowImage } from "../../../assets/common/swiper_arrow.svg";
import { useStyles } from "./EventsSwiper.styles";
import type { Props } from "./EventSwiper.types";

export const EventsSwiper: FC<Props> = ({ events }) => {
	const classes = useStyles();
	const intl = useIntl();

	const params = {
		Swiper,
		modules: [Navigation],
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		renderPrevButton: () => <div className="swiper-button-prev"><ArrowImage /></div>,
		renderNextButton: () => <div className="swiper-button-next"><ArrowImage /></div>,
		spaceBetween: 20,
		breakpoints: {
			600: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			900: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	};

	return (
		<div className={classes.swiperWrapper1}>
			<Typography
				variant="h2"
				mb="30px"
			>
				{intl.formatMessage({ id: "recentEvents" })}
			</Typography>

			<Box
				component="div"
				className={classes.swiperWrapper1}
			>
				<ReactIdSwiperCustom {...params}>
					{events.map((event) =>
						<div key={event.id}>
							{(event.eventImg) ?
								<img
									src={event.eventImg}
									alt={event.eventName}
									width="380"
									height="264"
									className={classes.swiperImg}
								/>
								:
								<div className={classes.swiperEmptyimg}>
									<RocketSvg />
								</div>}

							<div className={classes.swiperTimeBlock}>
								<Typography variant="caption">
									<time
										dateTime={format(
											new Date(event.eventDate),
											"yyyy-MM-dd"
										)}
									>
										{format(
											new Date(event.eventDate),
											"MMM. d, yyyy, h:mm aaa"
										)}
									</time>
								</Typography>
							</div>
							<Typography
								variant="h3"
								mb="50px"
								style={{ wordWrap: "break-word" }}
							>
								{event.eventName}
							</Typography>
						</div>)}
				</ReactIdSwiperCustom>
			</Box>
		</div>
	);
};
