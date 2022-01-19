import { ThemeProvider } from "@mui/material/styles";
import type { PreloadedState } from "@reduxjs/toolkit";
import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import AppIntlProvider from "../hocs/AppIntlProvider";
import { setupStore } from "../redux/store";
import type { AppStore, RootState } from "../redux/store/store.types";
import theme from "../theme";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store. For
// future dependencies, such as wanting to test with react-router, you can extend
// this interface to accept a path and route and use those in a <MemoryRouter />
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
	preloadedState?: PreloadedState<RootState>
	store?: AppStore
}

function renderWithProviders(
	ui: React.ReactElement,
	{
		preloadedState = {},
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) {
	function Wrapper({ children }: PropsWithChildren<Record<string, unknown>>): JSX.Element {
		return (<Provider store={store}>
			<BrowserRouter>
				<AppIntlProvider>
					<AuthProvider>
						<ThemeProvider theme={theme}>
							{children}
						</ThemeProvider>
					</AuthProvider>
				</AppIntlProvider>
			</BrowserRouter>
		</Provider>);
	}
	return {
		store, ...render(
			ui,
			{ wrapper: Wrapper, ...renderOptions }
		)
	};
}

export { renderWithProviders };
