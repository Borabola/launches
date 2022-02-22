import { ThemeProvider } from "@mui/material/styles";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Footer } from ".";
import AppIntlProvider from "../../../hocs/AppIntlProvider";
import theme from "../../../theme";
const nowDay = new Date();

describe(
	"Component: Footer",
	() => {
		it(
			"should render current year and text correctly ",
			() => {
				render(<BrowserRouter>
					<AppIntlProvider>
						<ThemeProvider theme={theme}>
							<Footer />
						</ThemeProvider>
					</AppIntlProvider>
           </BrowserRouter>);

				const yearText = nowDay.getFullYear().toString();

				expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
				expect(screen.getByTestId("test_id_year")).toHaveTextContent(yearText);
			}
		);
	}
);
