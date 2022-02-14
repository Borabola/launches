import { ThemeProvider } from "@mui/material/styles";
import type { PreloadedState } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
//import { RenderResult } from "@testing-library/react-hooks/lib/types/react";
//import { RenderResult } from "@testing-library/jest-dom";
//import { RenderResult } from "@testing-library/jest-dom";
//import { RenderResult } from "@testing-library/react";   // !!!!
import type { RenderOptions } from "@testing-library/react";
import {
	act, fireEvent, render, waitFor
} from "@testing-library/react";
import { createMemoryHistory } from "history";
import React, { JSXElementConstructor, PropsWithChildren, ReactElement } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Router } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { AuthValues } from "../contexts/AuthContext.types";
import AppIntlProvider from "../hocs/AppIntlProvider";
import { setupStore } from "../redux/store";
import type { AppStore, RootState } from "../redux/store/store.types";
import theme from "../theme";
import { AuthorizationStatusEnum } from "../types/Enums";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store. For
// future dependencies, such as wanting to test with react-router, you can extend
// this interface to accept a path and route and use those in a <MemoryRouter />
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
	preloadedState?: PreloadedState<RootState>
	store?: AppStore
}
type UiType = ReactElement<Record<string, unknown>, string |
	JSXElementConstructor<Record<string, unknown>>>;

//type RerenderType = RenderResult;
type RerenderType = (ui: UiType) => void;
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

const history = createMemoryHistory({ initialEntries: ["/Private"] });
const historyCommon = createMemoryHistory({ initialEntries: ["/Common"] });

const renderWithProvidersUser = (testInfo: AuthValues) => (
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
					<AuthContext.Provider value={testInfo}>
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
const renderWithProvidersLogin = renderWithProvidersUser(testValue);
const renderWithProvidersLogout = renderWithProvidersUser(testValueNull);

/**
 * BrowserRouter ignores the history prop as it handles the history automatically for you.
 * If you need access to the history outside of a react component, then using Router should be fine
 */
const renderWithAuth = (
	ui: React.ReactElement,
	{
		preloadedState = {
			auth: {
				authorizationStatus: AuthorizationStatusEnum.AUTH,
			}
		},
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) => {
	const Wrapper = ({ children }: PropsWithChildren<Record<string, unknown>>): JSX.Element => {
		return (<Provider store={store}>
			<Router history={history}>
				<AppIntlProvider>
					<AuthContext.Provider value={testValue}>
						<ThemeProvider theme={theme}>
							{children}
						</ThemeProvider>
					</AuthContext.Provider>
				</AppIntlProvider>
			</Router>
		</Provider>);
	};

	return {
		store, ...render(
			ui,
			{ wrapper: Wrapper, ...renderOptions }
		)
	};
};

const renderWithUnknown = (
	ui: React.ReactElement,
	{
		preloadedState = {},
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) => {
	const Wrapper = ({ children }: PropsWithChildren<Record<string, unknown>>): JSX.Element => {
		return (<Provider store={store}>
			<Router history={historyCommon}>
				{children}
			</Router>
		</Provider>);
	};

	return {
		store, ...render(
			ui,
			{ wrapper: Wrapper, ...renderOptions }
		)
	};
};

const renderWithUnknownHistory = (
	ui: React.ReactElement,
	{
		preloadedState = {},
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) => {
	setupListeners(store.dispatch);
	const Wrapper = ({ children }: PropsWithChildren<Record<string, unknown>>): JSX.Element => {
		const history = createMemoryHistory();
		return (<Provider store={store}>
			<Router history={history}>
				{children}
			</Router>
		</Provider>);
	};
	//store.dispatch(spacelaunchesSlice.util.resetApiState());
	return {
		store, ...render(
			ui,
			{ wrapper: Wrapper, ...renderOptions }
		)
	};
};

const renderforRTKtest = (
	ui: React.ReactElement,
	{
		preloadedState = {},
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) => {
	setupListeners(store.dispatch);

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

	//store.dispatch(spacelaunchesSlice.util.resetApiState());

	return {
		store, ...render(
			ui,
			{ wrapper: Wrapper, ...renderOptions }
		)
	};
};

const toArrayBuffer = (buf: Buffer) => {
	const ab = new ArrayBuffer(buf.length);
	const view = new Uint8Array(ab);
	for (let i = 0; i < buf.length; ++i) {
		view[i] = buf[i];
	}
	return ab;
};

async function flushPromises(
	rerender: RerenderType, ui: UiType
) {
	await act(() => waitFor(() => rerender(ui)));
}

function dispatchEvt(
	node: Element | Node | Document | Window, type: string, data: unknown
) {
	const event = new Event(
		type,
		{ bubbles: true }
	);
	Object.assign(
		event,
		data
	);
	fireEvent(
		node,
		event
	);
}
export {
	dispatchEvt,
	flushPromises,
	renderforRTKtest,
	renderWithUnknownHistory,
	renderWithProvidersLogin,
	renderWithProvidersLogout,
	renderWithAuth,
	renderWithUnknown,
	toArrayBuffer
};

