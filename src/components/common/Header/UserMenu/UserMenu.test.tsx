import { ThemeProvider } from "@mui/material/styles";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { UserMenu } from ".";
import { FakeIntlProvider } from "../../../../hocs/AppIntlProvider/AppIntlProvider.test";
import theme from "../../../../theme";

describe(
	"Component: UserMenu",
	() => {
		it(
			"should render current text",
			() => {
				render(<BrowserRouter>
					<FakeIntlProvider>
						<ThemeProvider theme={theme}>
							<UserMenu />
						</ThemeProvider>
					</FakeIntlProvider>
           </BrowserRouter>);

				expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
				expect(screen.getByText(/Add new product/i)).toBeInTheDocument();
			}
		);
	}
);
