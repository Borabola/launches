import { screen } from "@testing-library/react";
//import { JSXElementConstructor, ReactElement } from "react";
import { Header } from ".";
import { renderWithProviders } from "../../../utils/testHelper";

/*type Testcomponent = ReactElement<Record<string, unknown>, string |
	JSXElementConstructor<Record<string, unknown>>> | null;*/
//type testcomponent = ReactElement<Record<string, unknown>, Record<string, unknown>> | null;
//const fakeApp: Testcomponent = null;

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

		/*it(
			"should render correctly",
			async () => {
				renderWithProviders(<Header isMain={false} />);

				await screen.getAllByText(/test/i).toBeInTheDocument();
			}
		);*/
		it(
			"should render correctly",
			() => {
				renderWithProviders(<Header isMain={false} />);

				expect(screen.getByText(/logout/i)).toBeInTheDocument();
			}
		);
	}
);
