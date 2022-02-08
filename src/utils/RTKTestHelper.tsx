import {
	AnyAction,
	combineReducers,
	configureStore, EnhancedStore, Middleware, Reducer
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Provider } from "react-redux";
import { Store } from "redux";
import type { ThunkAction } from "redux-thunk";
import { RootState } from "redux/store";

export function withProvider(store: Store<any>) {
	return function Wrapper({ children }: any) {
		return <Provider store={store}>{children}</Provider>;
	};
}

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	AnyAction
>;

/*
	* Modified version of RTK Query's helper function:
	* https://github.com/reduxjs/redux-toolkit/blob/master/packages/toolkit/src/query/tests/helpers.tsx
	*/

export function setupApiStore<
	A extends {
		//reducer: Reducer<RootState, AnyAction>;
		reducer: Reducer<any, any>;
		reducerPath: string;
		middleware: Middleware;
		util: {
			resetApiState(
			): any
		};
	},
	R extends Record<string, Reducer<any, any>>
	= Record<never, never>
>(
	api: A, extraReducers?: R, withoutListeners?: boolean
): { api: A; store: EnhancedStore } {

	const getStore = (): EnhancedStore =>
		configureStore({
			reducer: combineReducers({
				[api.reducerPath]: api.reducer,
				...extraReducers,
			}),
			middleware: (gdm) =>
				gdm({ serializableCheck: false, immutableCheck: false }).concat(api.middleware),
		});

	type StoreType = EnhancedStore<
		{
			api: ReturnType<A["reducer"]>;
		} & {
			[K in keyof R]: ReturnType<R[K]>;
		},
		AnyAction,
		ReturnType<typeof getStore> extends
		EnhancedStore<Record<string, unknown>, AnyAction, infer M>
		? M
		: never
	>;

	const initialStore = getStore() as StoreType;
	const refObj = {
		api,
		store: initialStore,
		wrapper: withProvider(initialStore),
	};
	const store = getStore() as StoreType;
	refObj.store = store;

	let cleanupListeners: () => void;

	beforeEach(() => {
		const store = getStore() as StoreType;
		refObj.store = store;
		refObj.wrapper = withProvider(store);
		if (!withoutListeners) {
			cleanupListeners = setupListeners(store.dispatch);
		}
	});
	afterEach(() => {
		if (!withoutListeners) {
			cleanupListeners();
		}
		refObj.store.dispatch(api.util.resetApiState());
	});

	return refObj;
}
