import { FC } from "react";
import Swiper, { Navigation } from "swiper";
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { Theme } from "@material-ui/core";
import { Typography } from "@mui/material";
import { format } from "date-fns";
import { useIntl } from "react-intl";
import "swiper/swiper.scss";
import { ReactComponent as RocketSvg } from "../../../assets/common/rocketLogo.svg";
import { ReactComponent as ArrowImage } from "../../../assets/common/swiper_arrow.svg";
import type { Props } from "./EventSwiper.types";

const useStyles = makeStyles((theme: Theme) => ({
	swiperEmptyimg: {
		width: theme.spacing(47.5),
		height: "13.75vw",
		marginBottom: theme.spacing(2.5),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#3F3881",
		[theme.breakpoints.down("lg")]: {
			height: "40vw",
		},
		[theme.breakpoints.down("sm")]: {
			height: "60vw",
		},

		"& svg": {
			width: theme.spacing(19.25),
			height: theme.spacing(19.25),
			opacity: 0.2,
		},
	},
	swiperImg: {
		width: "100%",
		maxWidth: "100%",
		objectFit: "cover",
		height: "13.75vw",
		marginBottom: theme.spacing(2.5),
		overflow: "hidden",
		[theme.breakpoints.down("lg")]: {
			height: "40vw",
		},
		[theme.breakpoints.down("sm")]: {
			height: "60vw",
		},
	},
	swiperTimeBlock: {
		padding: theme.spacing(
			1.25,
			3.75
		),
		marginBottom: theme.spacing(1.875),
		display: "inline-flex",
		justifyContent: "center",
		backgroundColor: "#4A00E0",
		borderRadius: theme.spacing(6.25),
	},
	swiperWrapper1: {
		width: "100%",

		"& .swiper-container": {
			paddingTop: theme.spacing(12.5),
			marginTop: theme.spacing(-12.5),
			color: "#4A00E0",
		},

		"& .swiper-button-next": {
			position: "absolute",
			width: theme.spacing(7),
			height: theme.spacing(7),
			top: theme.spacing(1.25),
			right: "0",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			cursor: "pointer",
			transition: "0.3s ease",

			"&:hover": {
				opacity: "0.7",
			},

			"&::after": {
				display: "none",
			},
			[theme.breakpoints.down("md")]: {
				display: "none",
				width: 0,
				height: 0,
			},
		},
		"& .swiper-button-prev": {
			position: "absolute",
			width: theme.spacing(7),
			height: theme.spacing(7),
			top: theme.spacing(1.25),
			right: theme.spacing(12.75),
			left: "auto",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			cursor: "pointer",
			transform: "rotate(180deg)",
			transition: "0.3s ease",
			"&:hover": {
				opacity: "0.7",
			},

			"&::after": {
				display: "none",
			},
			[theme.breakpoints.down("md")]: {
				display: "none",
				width: 0,
				height: 0,
			},
		},
		"& .swiper-button-prev.swiper-button-disabled": {
			color: "#F1EBFF",
			cursor: "inherit",
			"&:hover": {
				opacity: "1",
			},

		},
		"& .swiper-button-next.swiper-button-disabled": {
			color: "#F1EBFF",
			cursor: "inherit",
			"&:hover": {
				opacity: "1",
			},

		},
	}
}));


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
		//slidesPerView: 3,
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
