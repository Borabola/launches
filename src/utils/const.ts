export const enum AppRoute {
	ADDPRODUCT_PAGE = "/add_product",
	DASHBOARD = "/dashboard",
	EVENT = "/event/:id",
	LAUNCH = "/launch/:id",
	LOGIN = "/login",
	ROCKET = "/rocket/:id",
	ROOT = "/",
	SIGNIN = "/signin",
	PAGE_NOT_FOUND = "/404",
}


export const enum APIRoutesEnum {
	LAUNCHES = "launch/upcoming/",
	EVENTS = "event/upcoming/",
}

export const enum AuthorizationStatus {
	AUTH = "AUTH",
	NO_AUTH = "NO_AUTH",
	UNKNOWN = "UNKNOWN",
}

//the number of items in the request
const REQUEST_QNT = 30;

// Sol key for encrypt user info token
const KEY = "skeletonEcnryptKey";

const launchQnt = 6;
const MINUTE = 60;
const HOURS = 24;
const SECONDS = 60;

const MAX_FILE_SIZE = 1000000; //1mb
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];


export { MAX_FILE_SIZE, HOURS, KEY, launchQnt, MINUTE, REQUEST_QNT, SECONDS, SUPPORTED_FORMATS };
