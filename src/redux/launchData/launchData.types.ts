export interface EventState {
	events: [],
	eventError: unknown,
	//currentEvent: ,
	isEventsLoaded: boolean,
	//isCurrentEvent: boolean,
	eventStatus: "loading" | "resolved" | "rejected" | null,
}

