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
			dark: "#1C2056",
			light: "rgba(255, 255, 255, 0.1)"
		},
		secondary: {
			main: "#FFFFFF",
			light: "rgba(24, 27, 72, 0)",
			dark: "#3F3881",
		},
		info: {
			main: "#C0C0C0",
			light: "#8E2DE2",
			dark: "#4A00E0",
		},
		success: {
			main: "rgba(0, 0, 0, 0.2)",
		},
		background: {
			default: "#181B48",
			paper: "rgba(0, 0, 0, 0)",
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
	lineHeight: "121%",
	letterSpacing: 0,
	[theme.breakpoints.down("lg")]: {
		fontSize: 60,
		lineHeight: "100%",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: 48,
		lineHeight: "108%",
	},
};

theme.typography.h2 = {
	fontFamily: fonts.Montserrat,
	fontSize: 54,
	fontWeight: 800,
	lineHeight: "118%",
	color: theme.palette.primary.main,
	[theme.breakpoints.down("lg")]: {
		fontSize: 48,
		lineHeight: "104%",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: 38,
	},
};

theme.typography.h3 = {
	fontFamily: fonts.Montserrat,
	fontSize: 26,
	fontWeight: 700,
	lineHeight: "108%",
	color: theme.palette.primary.main,
	[theme.breakpoints.down("lg")]: {
		fontSize: 22,
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: 18,
	},
};

theme.typography.h4 = {
	fontFamily: fonts.Montserrat,
	fontSize: 22,
	fontWeight: 700,
	lineHeight: "127%",
	letterSpacing: "0.0038em",
};

theme.typography.h5 = {
	fontFamily: fonts.Roboto,
	fontSize: 17,
	fontWeight: 700,
	lineHeight: "164%",
	color: theme.palette.primary.main,
};

theme.typography.body1 = {
	fontFamily: fonts.Roboto,
	fontSize: 17,
	fontWeight: 400,
	lineHeight: "164%",
	color: theme.palette.primary.main,
};

theme.typography.caption = {
	fontFamily: fonts.Montserrat,
	fontSize: 18,
	fontWeight: 500,
	fontStyle: "italic",
	lineHeight: "100%",
	color: theme.palette.primary.main,
};

theme.components = {
	MuiButton: {
		styleOverrides: {
			root: {
				padding: theme.spacing(
					3.625,
					10.625
				),
				fontFamily: "Montserrat",
				fontWeight: "700",
				fontSize: 20,
				lineHeight: "100%",
				textDecoration: "none",
				textTransform: "capitalize",
				color: theme.palette.primary.main,

				[theme.breakpoints.down("sm")]: {
					fontSize: 18,
					lineHeight: "1.22%",
					padding: theme.spacing(
						1.875,
						3.75
					),
				},
			},
			contained: {
				background: `linear-gradient(93.72deg,
					 ${theme.palette.info.light} 9.41%,
					 ${theme.palette.info.dark} 86.1%)`,
				borderRadius: theme.spacing(6.25),
				color: theme.palette.primary.main,

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
	},
	MuiOutlinedInput: {
		styleOverrides: {
			root: {
				color: theme.palette.secondary.main,
				borderColor: theme.palette.secondary.main,
			}
		}
	}
};

export default theme;
