import { LaunchAdapterType, CurrentLaunchAdapterType } from "utils/adapter";

export interface LaunchState {
	currentLaunch: CurrentLaunchAdapterType | Record<string, never>,
	isLaunchesLoaded: boolean,
	isCurrentLaunch: boolean,
	launches: LaunchAdapterType[] | [],
	launchError: unknown | null,
	launchStatus: "loading" | "resolved" | "rejected" | null,
	launchCurrentStatus: "loading" | "resolved" | "rejected" | null,
	launchCurrentError: unknown | null,
} 