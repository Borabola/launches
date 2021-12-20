import { eventAdapter } from "utils/adapter";

type EventProp = ReturnType <typeof eventAdapter>;

export type Props = {
	events: EventProp[] | []
};