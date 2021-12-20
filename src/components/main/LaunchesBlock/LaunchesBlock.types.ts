import { launchAdapter } from "utils/adapter";

type LaunchProp = ReturnType <typeof launchAdapter>;

export type Props = {
	launches: LaunchProp[] | [],
	onShowMore: () => void,
	showenLaunchesQnt: number
};