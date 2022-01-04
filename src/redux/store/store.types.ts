/*import { store } from "./index";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface IThunkApi {
	dispatch: AppDispatch,
	state: RootState,
}*/

interface ThunkOptions<E = unknown> {
	extraArgument: E
}

type IsImmutableFunc = (value: unknown) => boolean;

interface ImmutableStateInvariantMiddlewareOptions {
	/**
	Callback function to check if a value is considered to be immutable.
	This function is applied recursively to every value contained in the state.
	The default implementation will return true for primitive types
	(like numbers, strings, booleans, null and undefined).
   */
	isImmutable?: IsImmutableFunc
	/**
	An array of dot-separated path strings that match named nodes from
	the root state to ignore when checking for immutability.
	Defaults to undefined
   */
	ignoredPaths?: string[]
	/** Print a warning if checks take longer than N ms. Default: 32ms */
	warnAfter?: number
	// @deprecated. Use ignoredPaths
	ignore?: string[]
}

interface SerializableStateInvariantMiddlewareOptions {
	/**
	 * The function to check if a value is considered serializable. This
	 * function is applied recursively to every value contained in the
	 * state. Defaults to `isPlain()`.
	 */
	isSerializable?: (value: unknown) => boolean
	/**
	 * The function that will be used to retrieve entries from each
	 * value.  If unspecified, `Object.entries` will be used. Defaults
	 * to `undefined`.
	 */
	getEntries?: (value: unknown) => [string, unknown][]

	/**
	 * An array of action types to ignore when checking for serializability.
	 * Defaults to []
	 */
	ignoredActions?: string[]

	/**
	 * An array of dot-separated path strings to ignore when checking
	 * for serializability, Defaults to ['meta.arg', 'meta.baseQueryMeta']
	 */
	ignoredActionPaths?: string[]

	/**
	 * An array of dot-separated path strings to ignore when checking
	 * for serializability, Defaults to []
	 */
	ignoredPaths?: string[]
	/**
	 * Execution time warning threshold. If the middleware takes longer
	 * than `warnAfter` ms, a warning will be displayed in the console.
	 * Defaults to 32ms.
	 */
	warnAfter?: number

	/**
	 * Opt out of checking state, but continue checking actions
	 */
	ignoreState?: boolean
}

export interface GetDefaultMiddlewareOptions {
	thunk?: boolean | ThunkOptions
	immutableCheck?: boolean | ImmutableStateInvariantMiddlewareOptions
	serializableCheck?: boolean | SerializableStateInvariantMiddlewareOptions
}
