import { EventAdapterType } from "utils/adapter";

export interface EventState {
	events: EventAdapterType[] | [],
	eventError: unknown,
	//currentEvent: ,
	isEventsLoaded: boolean,
	//isCurrentEvent: boolean,
	eventStatus: "loading" | "resolved" | "rejected" | null,
}

