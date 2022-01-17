import { currentLaunchAdapter } from "redux/services/adapter";

export type Props = {
	launch: ReturnType <typeof currentLaunchAdapter>,
};
