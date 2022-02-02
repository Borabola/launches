import { launchAdapter } from "redux/services/adapter";

export type Props = {
	launch: ReturnType<typeof launchAdapter>
};
