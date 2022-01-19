import { ThemeProvider } from "@mui/material/styles";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { UserMenu } from ".";
import { FakeIntlProvider } from "../../../../hocs/AppIntlProvider/AppIntlProvider.test";
import messages_en from "../../../../i18n/en.json";
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

				const menuText1 = messages_en["addNewProduct"] as string;
				const menuText2 = messages_en["dashboardLink"] as string;

				expect(screen.getByText(menuText1)).toBeInTheDocument();
				expect(screen.getByText(menuText2)).toBeInTheDocument();
			}
		);
	}
);
