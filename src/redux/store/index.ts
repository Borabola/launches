
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER 
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../rootReducer";
import { isDevelopment } from "../../utils/helper";
import { GetDefaultMiddlewareOptions } from "./store.types";
import {Middleware} from "redux";
/*function getDefaultMiddleware<S = any>(
	options: GetDefaultMiddlewareOptions = {}
  ): Middleware<{}, S>[]
*/

const persistConfig = {
	key: "primary",
	storage: storage,
	whitelist: ["auth", "user"],
};
const persistedReducer = persistReducer(
	persistConfig,
	rootReducer 
);

/*type GetDefaultMiddleware<S=unknown> =
	(options: GetDefaultMiddlewareOptions) => Middleware<Record<string, unknown>, S>[];*/

type GetDefaultMiddleware =
	(options: GetDefaultMiddlewareOptions) => Middleware<Record<string, unknown>>[];

const getPersistMiddleware =
	( getDefaultMiddleware: GetDefaultMiddleware) => (
		getDefaultMiddleware( {
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			
			}
		})
	);

const getStoreMiddleware = ( getDefaultMiddleware: GetDefaultMiddleware ) => (
	isDevelopment()
		? [...getPersistMiddleware( getDefaultMiddleware ), logger]
		: getPersistMiddleware( getDefaultMiddleware )
);

const getStoreDevTools = () => isDevelopment();

// Store with redux-persist (save stores in browser local storage )

const store = configureStore( {
	reducer: persistedReducer,
	middleware: ( getDefaultMiddleware ) => getStoreMiddleware( getDefaultMiddleware ),
	devTools: getStoreDevTools(),
} );

const persistor = persistStore( store );

export { persistor, store };    


