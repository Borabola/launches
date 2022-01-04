import { currentLaunchAdapter } from "utils/adapter";

export type Props = {
	launch: ReturnType <typeof currentLaunchAdapter>,
};
