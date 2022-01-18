import { configureStore } from "@reduxjs/toolkit";
import {
	TypedUseSelectorHook, useDispatch, useSelector
} from "react-redux";
import logger from "redux-logger";
import {
	FLUSH, PAUSE,
	PERSIST, persistReducer, persistStore, PURGE,
	REGISTER, REHYDRATE
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { spacelaunchesSlice } from "../services/api";
import { isDevelopment } from "../../utils/helper";
import rootReducer from "../rootReducer";
import type { AppDispatch, RootState } from "./store.types";

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
		const extraMiddleweres = [spacelaunchesSlice.middleware];

		if (isDevelopment()) { extraMiddleweres.push(logger); }

		return getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		}).concat(extraMiddleweres);
	},
});

const persistor = persistStore(store);

export { persistor, store };
export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
