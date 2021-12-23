import { eventAdapter } from "utils/adapter";
import { EventData } from "utils/adapter.types";

type EventProp = ReturnType <typeof eventAdapter>;

export type Props = {
	//event: EventProp[] | []
	data: EventData | never;
};