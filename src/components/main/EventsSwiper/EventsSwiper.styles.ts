import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
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
