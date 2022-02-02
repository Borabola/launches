import { ThemeProvider } from "@mui/material/styles";
import AppIntlProvider from "../../../hocs/AppIntlProvider";
import { render, screen } from "@testing-library/react";
import { Loader } from ".";
import theme from "../../../theme";

describe(
	"Component: Loader",
	() => {
		it(
			"should render correctly",
			() => {
				render(<AppIntlProvider>
				<ThemeProvider theme={theme}>
                    <Loader />
    </ThemeProvider>
           </AppIntlProvider>);

				expect(screen.getByText(/Loading/i)).toBeInTheDocument();
			}
		);
	}
);
