

export interface ResultType {
	id: number;
	name: string;
}

export interface Status {
	id: number;
	name: string;
}

export interface Launch {
	id: string;
	url: string;
	launch_library_id?: null | number ;
	slug: string;
	name: string;
	status: Status;
	net: string;
	window_end: Date;
	window_start: Date;
	mission: string;
	mission_type: string;
	pad: string;
	location: string;
	landing?: null | number;
	landing_success?: null | boolean;
	launcher?: null | string;
	orbit: string;
	image: string;
}

export interface Status2 {
	id: number;
	name: string;
}

export interface Spacestation {
	id: number;
	url: string;
	name: string;
	status: Status2;
	orbit: string;
	image_url?: null | string | string[];
}

export interface Expedition {
	id: number;
	url: string;
	name: string;
	start: Date;
	end?: Date;
	spacestation: Spacestation;
}

export interface Status3 {
	id: number;
	name: string;
}

export interface Spacestation2 {
	id: number;
	url: string;
	name: string;
	status: Status3;
	founded: string;
	description: string;
	orbit: string;
	image_url?: null | string | string[];
}

export interface EventResult {
	id: number;
	url: string;
	name: string;
	type: ResultType;
	description: string;
	location: string;
	news_url: string;
	video_url: string;
	feature_image: string;
	date: Date;
	launches: Launch[];
	expeditions: Expedition[];
	spacestations: Spacestation2[];
}

export interface EventData {
	count: number;
	next: string;
	previous?: null | number | string;
	results: EventResult[];
}


//Launches

export interface LaunchServiceProvider {
	id: number;
	url: string;
	name: string;
	featured: boolean;
	type: string;
	country_code: string;
	abbrev: string;
	description: string;
	administrator?: string;
	founding_year: string;
	launchers: string;
	spacecraft: string;
	launch_library_url: string;
	successful_launches: number;
	failed_launches: number;
	pending_launches: number;
	info_url?: null | string | string[];
	wiki_url: string;
	logo_url?: string;
	image_url?: null | string | string[];
	nation_url?: null | string | string[];
}

export interface Configuration {
	id: number;
	launch_library_id?: number | null;
	url: string;
	name: string;
	description: string;
	family: string;
	full_name: string;
	launch_service_provider: LaunchServiceProvider;
	variant: string;
	alias: string;
	min_stage?: number | null;
	max_stage?: number | null;
	length?: number | null;
	diameter?: number;
	maiden_flight: string;
	launch_mass?: number;
	leo_capacity?: number;
	gto_capacity?: number;
	to_thrust?: number;
	apogee?: number;
	vehicle_range?: null | number;
	image_url?: null | string | string[];
	info_url?: null | string | string[];
	wiki_url?: null | string | string[];
}

export interface Launcher {
	id: number;
	url: string;
	details: string;
	flight_proven: boolean;
	serial_number: string;
	status: string;
	previous_flights: number;
	image_url: string;
}

export interface Location {
	name: string;
	abbrev: string;
	description: string;
}

export interface Type {
	name: string;
	abbrev: string;
	description: string;
}

export interface Landing {
	attempt: boolean;
	success?: null | boolean;
	description: string;
	location: Location;
	type: Type;
}

export interface LauncherStage {
	type: string;
	reused: boolean;
	launcher_flight_number: number;
	launcher: Launcher;
	landing: Landing;
}

export interface Status2 {
	id: number;
	name: string;
}

export interface Type2 {
	id: number;
	name: string;
}

export interface Agency {
	id: number;
	url: string;
	name: string;
	type: string;
}

export interface SpacecraftConfig {
	id: number;
	url: string;
	name: string;
	type: Type2;
	agency: Agency;
	in_use: boolean;
	capability: string;
	history: string;
	details: string;
	maiden_flight: string;
	height: number;
	diameter: number;
	human_rated: boolean;
	crew_capacity?: null | string | string[];
	payload_capacity: number;
	flight_life: string;
	image_url: string;
	nation_url?: null | string | string[];
	wiki_link: string;
	info_link: string;
}

export interface Spacecraft {
	id: number;
	url: string;
	name: string;
	serial_number: string;
	status: Status2;
	description: string;
	spacecraft_config: SpacecraftConfig;
}

export interface SpacecraftStage {
	id: number;
	url: string;
	mission_end?: null | number;
	destination: string;
	launch_crew: string[];
	onboard_crew: string[];
	landing_crew: string[];
	spacecraft: Spacecraft;
	docking_events: string[];
}

export interface Rocket {
	configuration: Configuration;
	launcher_stage: LauncherStage[] | null;
	spacecraft_stage?: SpacecraftStage | null;
}

export interface Mission {
	id: number;
	launch_library_id?: null | number;
	name: string;
	description: string;
	type: string;
	orbit: string;
	orbit_abbrev: string;
}

export interface Location2 {
	id: number;
	name: string;
	country_code: string;
}

export interface Pad {
	id: number;
	agency_id?: number | null;
	name: string;
	info_url?: null | string | string[];
	wiki_url: string;
	map_url: string;
	latitude: string;
	longitude: string;
	location: Location2;
}

export interface LaunchResult {
	id: string;
	url: string;
	launch_library_id?: null | number;
	slug: string;
	name: string;
	img_url?: null | string | string[];
	status: Status;
	net: string;
	window_end: Date;
	window_start: Date;
	inhold: boolean;
	tbdtime: boolean;
	tbddate: boolean;
	probability?: number;
	holdreason: string;
	failreason: string;
	hashtag?: null | string | string[];
	rocket: Rocket;
	mission: Mission;
	pad: Pad;
	infoURLs: string[];
	vidURLs: string[];
	image_url?: string;
	infographic_url?: null | string | string[];
}

export interface LaunchData {
	count: number;
	next: string;
	previous?: null | number | string;
	results: LaunchResult[];
}

///current launch
export interface Status {
	id: number;
	name: string;
}

export interface LaunchServiceProvider {
	id: number;
	url: string;
	name: string;
	featured: boolean;
	type: string;
	country_code: string;
	abbrev: string;
	description: string;
	administrator?: string;
	founding_year: string;
	launchers: string;
	spacecraft: string;
	launch_library_url: string;
	successful_launches: number;
	failed_launches: number;
	pending_launches: number;
	info_url?: null | string | string[];
	wiki_url: string;
	logo_url?: string;
	image_url?: null | string | string[];
	nation_url?: null | string | string[];
}



export interface Rocket {
	configuration: Configuration;
	launcher_stage: LauncherStage[] | null;
	spacecraft_stage?: SpacecraftStage | null;
}

export interface CurrentLocation {
	id: number;
	name: string;
	country_code: string;
}

export interface Pad {
	id: number;
	agency_id?: null | number;
	name: string;
	info_url?: null | string | string[];
	wiki_url: string;
	map_url: string;
	latitude: string;
	longitude: string;
	location: CurrentLocation;
}

export interface CurrentLaunch {
	id: string;
	url: string;
	launch_library_id?: null | number;
	slug: string;
	name: string;
	img_url?: null | string | string[];
	status: Status;
	net: string;
	window_end: Date;
	window_start: Date;
	inhold: boolean;
	tbdtime: boolean;
	tbddate: boolean;
	probability?: null | string | string[];
	holdreason?: null | string | string[];
	failreason?: null | string | string[];
	hashtag?: null | string | string[];
	rocket: Rocket;
	mission: Mission;
	pad: Pad;
	infoURLs: null | string | string[];
	vidURLs: null | string | string[] | undefined;
	image_url?: null | string | string[];
	infographic_url?: null | string | string[];
}


