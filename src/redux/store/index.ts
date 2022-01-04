import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
	TypedUseSelectorHook, useDispatch, useSelector
} from "react-redux";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../rootReducer";
import { isDevelopment } from "../../utils/helper";
import {
	eventSlice, launchSlice, launchCurrentSlice
} from "../../services/api";

const persistConfig = {
	key: "primary",
	storage: storage,
	whitelist: ["auth", "user"],
};
const persistedReducer = persistReducer(
	persistConfig,
	rootReducer
);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => {
		const extraMiddleweres = [
			eventSlice.middleware,
			launchSlice.middleware,
			launchCurrentSlice.middleware];

		if (isDevelopment()) {extraMiddleweres.push(logger);}

		return getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		}).concat(extraMiddleweres);
	},
});

const persistor = persistStore(store);

export { persistor, store };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface IThunkApi {
	dispatch: AppDispatch,
	state: RootState,
}
