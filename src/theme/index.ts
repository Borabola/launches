import { createTheme } from "@mui/material/styles";

const breakpoints = {
	values: {
		xs: 0,
		sm: 600, // Phone
		md: 900, // Tablet/Laptop
		lg: 1440, // Desktop
		xl: 1536
	}
};

const fonts = {
	Roboto: "Roboto, sans-serif",
	Montserrat: "Montserrat, sans-serif"
};

const theme = createTheme({
	breakpoints,
	palette: {
		primary: {
			main: "#F1EBFF",
		},
		secondary: {
			main: "#FFFFFF",
		},
		info: {
			main: "#C0C0C0",
		},
		background: {
			default: "#181B48",
		},
		common: {
			white: "#fff",
			black: "#111",
		},
	},
});

theme.typography.h1 = {
	fontFamily: fonts.Montserrat,
	fontSize: 76,
	fontWeight: 800,
	lineHeight: "92px",
	letterSpacing: 0,
	[theme.breakpoints.down("lg")]: {
		fontSize: 60,
		lineHeight: "56px",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: 48,
		lineHeight: "52px",
	},
};

theme.typography.h2 = {
	fontFamily: fonts.Montserrat,
	fontSize: 54,
	fontWeight: 800,
	lineHeight: "64px",
	color: "theme.palette.primary.main",
	[theme.breakpoints.down("lg")]: {
		fontSize: 48,
		lineHeight: "50px",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: 38,
		lineHeight: "42px",
	},
};

theme.typography.h3 = {
	fontFamily: fonts.Montserrat,
	fontSize: 26,
	fontWeight: 700,
	lineHeight: "28px",
	color: "theme.palette.primary.main",
	[`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
		fontSize: 22,
		lineHeight: "24px",
	},
	[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
		fontSize: 18,
		lineHeight: "22px",
	},
};

theme.typography.h4 = {
	fontFamily: fonts.Montserrat,
	fontSize: 22,
	fontWeight: 700,
	lineHeight: "28px",
	letterSpacing: "0.0038em",
};

theme.typography.h5 = {
	fontFamily: fonts.Roboto,
	fontSize: 17,
	fontWeight: 700,
	lineHeight: "28px",
	color: "theme.palette.primary.main",
};

theme.typography.body1 = {
	fontFamily: fonts.Roboto,
	fontSize: 17,
	fontWeight: 400,
	lineHeight: "28px",
	color: "theme.palette.primary.main",
};

theme.typography.caption = {
	fontFamily: fonts.Montserrat,
	fontSize: 18,
	fontWeight: 500,
	fontStyle: "italic",
	lineHeight: "18px",
	color: theme.palette.primary.main,
};

theme.components = {
	MuiButton: {
		styleOverrides: {

			root: {
				padding: "29px 85px",
				fontFamily: "Montserrat",
				fontWeight: "700",
				fontSize: "20px",
				lineHeight: "20px",
				textDecoration: "none",
				textTransform: "capitalize",
				color: "theme.palette.primary.main",

				[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
					fontSize: 18,
					lineHeight: "22px",
					padding: "15px 30px",
				},
			},
			contained: {
				background: "linear-gradient(93.72deg, #8E2DE2 9.41%, #4A00E0 86.1%)",
				borderRadius: "50px",
				color: "theme.palette.primary.main",

			}
		}
	},
	MuiInput: {
		styleOverrides: {
			root: {
				color: theme.palette.secondary.main,
				"&::placeholder": {
					color: theme.palette.secondary.main
				},
				transition: "0.3s ease",
			},
		}
	}

};

export default theme;
