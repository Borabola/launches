import { screen } from "@testing-library/react";
import { JSXElementConstructor, ReactElement } from "react";
import { Header } from ".";
import { renderWithProviders } from "../../../utils/testHelper";

type Testcomponent = ReactElement<Record<string, unknown>, string |
	JSXElementConstructor<Record<string, unknown>>> | null;
//type testcomponent = ReactElement<Record<string, unknown>, Record<string, unknown>> | null;
const fakeApp: Testcomponent = null;
const store = {
	reducer: {

	},

};

describe(
	"Component: Header",
	() => {
		/*beforeAll(() => {
			fakeApp = (
				//const currentUser = null;
				//const logout = jest.fn();

				<Provider store={store}>
					<BrowserRouter>
						<AppIntlProvider>
							<AuthProvider>
								<ThemeProvider theme={theme}>
									<Header isMain={false} />
								</ThemeProvider>
							</AuthProvider>
						</AppIntlProvider>
					</BrowserRouter>
				</Provider>
			);
		});*/

		it(
			"should render correctly",
			async () => {
				renderWithProviders(<Header isMain={false} />);
				console.log(fakeApp);

				expect(screen.getAllByText(/login/i)).toBeInTheDocument();
			}
		);
	}
);
