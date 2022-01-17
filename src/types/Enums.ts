export const enum AppRouteEnum {
    ADDPRODUCT_PAGE = "/add_product",
    DASHBOARD = "/dashboard",
    EVENT = "/event/:id",
    LAUNCH = "/launch/:id",
    LOGIN = "/login",
    ROCKET = "/rocket/:id",
    ROOT = "/",
    SIGNIN = "/register",
    PAGE_NOT_FOUND = "/404",
}

export const enum APIRoutesEnum {
    LAUNCHES = "launch/upcoming/",
    EVENTS = "event/upcoming/",
}

export const enum AuthorizationStatusEnum {
    AUTH = "AUTH",
    NO_AUTH = "NO_AUTH",
    UNKNOWN = "UNKNOWN",
}
