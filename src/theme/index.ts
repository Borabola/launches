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
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					padding: "29px 85px",
					fontWeight: "700",
					fontSize: "20px",
					lineHeight: "20px",
					textDecoration: "none",
					textTransform: "capitalize",
					color: "#F1EBFF",
          
					[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
						fontSize: 18,
						lineHeight: "22px",
						padding: "15px 30px",
					},
				},
				contained: {
					background: "linear-gradient(93.72deg, #8E2DE2 9.41%, #4A00E0 86.1%)",
					borderRadius: "50px",
					color: "#F1EBFF",
				}
			}
		},
		MuiInput: {
			styleOverrides: {
				root: {
					color: "#FFFFFF",
					"&::placeholder": {
						color: "#FFFFFF"
					},
					transition: "0.3s ease",
				},
			},
		},
		
	}
});
	
theme.typography.h1 = {
	fontFamily: "Montserrat, sans-serif",
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
	fontFamily: "Montserrat, sans-serif",
	fontSize: 54,
	fontWeight: 800,
	lineHeight: "64px",
	color: "#F1EBFF",
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
	fontFamily: "Montserrat, sans-serif",
	fontSize: 26,
	fontWeight: 700,
	lineHeight: "28px",
	color: "#F1EBFF",
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
	fontFamily: "Montserrat, sans-serif",
	fontSize: 22,
	fontWeight: 700,
	lineHeight: "28px",
	letterSpacing: "0.0038em",
};

theme.typography.h5 = {
	fontFamily: "Roboto, sans-serif",
	fontSize: 17,
	fontWeight: 700,
	lineHeight: "28px",
	color: "#F1EBFF",
};

theme.typography.body1 = {
	fontFamily: "Roboto, sans-serif",
	fontSize: 17,
	fontWeight: 400,
	lineHeight: "28px",
	color: "#F1EBFF",
};

theme.typography.caption = {
	fontFamily: "Montserrat, sans-serif",
	fontSize: 18,
	fontWeight: 500,
	fontStyle: "italic",
	lineHeight: "18px",
	color: "#F1EBFF",
};

export default theme;
