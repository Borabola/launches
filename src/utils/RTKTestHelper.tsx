import {
	AnyAction,
	combineReducers,
	configureStore, EnhancedStore, Middleware, Reducer
} from "@reduxjs/toolkit";
import type { ThunkAction } from "redux-thunk";
import { RootState } from "redux/store";

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	AnyAction
>;

/*
	* Modified version of RTK Query's helper :
	* https://github.com/reduxjs/redux-toolkit/blob/master/packages/toolkit/src/query/tests/helpers.tsx
	*/

export const setupApiStore = <A extends {
		//reducer: Reducer<RootState, AnyAction>;
		reducer: Reducer<any, AnyAction>;
		reducerPath: string;
		middleware: Middleware;
		/*util: {
			resetApiState(
			): any
		};*/
	},
	R extends Record<string, Reducer<any, AnyAction>>
	= Record<never, never>>(
		api: A, extraReducers?: R
	): { api: A; store: EnhancedStore } => {

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
	};
	const store = getStore() as StoreType;
	refObj.store = store;

	return refObj;
};
