import { ThemeProvider } from "@mui/material/styles";
import type { PreloadedState } from "@reduxjs/toolkit";
import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
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

const currentUser = {
	email: "test@test.com",
	userId: "test"
};

const currentUserNull = null;

const login = jest.fn(() => {
	return Promise.resolve();
});
const signup = jest.fn(() => {
	return Promise.resolve();
});
const logout = jest.fn(() => {
	return Promise.resolve();
});
const googlePopupSignIn = jest.fn(() => {
	return Promise.resolve();
});

const testValue = {
	currentUser,
	login,
	signup,
	logout,
	googlePopupSignIn
};

const testValueNull = {
	currentUser: currentUserNull,
	login,
	signup,
	logout,
	googlePopupSignIn
};

/*const AuthContext = createContext<AuthValues | null>(null);
export const AuthProvider: FC = ({ children }: AuthProps) => {
	return (
		<AuthContext.Provider value={testValue}>
			{children}
		</AuthContext.Provider>
	);

};*/

const renderWithProvidersLogin = (
	ui: React.ReactElement,
	{
		preloadedState = {},
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) => {
	const Wrapper = ({ children }: PropsWithChildren<Record<string, unknown>>): JSX.Element => {
		return (<Provider store={store}>
			<BrowserRouter>
				<AppIntlProvider>
					<AuthContext.Provider value={testValue}>
						<ThemeProvider theme={theme}>
							{children}
						</ThemeProvider>
					</AuthContext.Provider>
				</AppIntlProvider>
			</BrowserRouter>
		</Provider>);
	};
	return {
		store, ...render(
			ui,
			{ wrapper: Wrapper, ...renderOptions }
		)
	};
};

const renderWithProvidersLogout = (
	ui: React.ReactElement,
	{
		preloadedState = {},
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) => {
	const Wrapper = ({ children }: PropsWithChildren<Record<string, unknown>>): JSX.Element => {
		return (<Provider store={store}>
			<BrowserRouter>
				<AppIntlProvider>
					<AuthContext.Provider value={testValueNull}>
						<ThemeProvider theme={theme}>
							{children}
						</ThemeProvider>
					</AuthContext.Provider>
				</AppIntlProvider>
			</BrowserRouter>
		</Provider>);
	};
	return {
		store, ...render(
			ui,
			{ wrapper: Wrapper, ...renderOptions }
		)
	};
};

export { renderWithProvidersLogin, renderWithProvidersLogout };
