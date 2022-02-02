import { currentLaunchAdapter } from "redux/services/adapter";

export type RenderPropsType = {
	days: number,
	hours: number,
	minutes: number,
	seconds: number,
	completed: boolean,
};

export type Props = {
	launch: ReturnType<typeof currentLaunchAdapter>,
};
