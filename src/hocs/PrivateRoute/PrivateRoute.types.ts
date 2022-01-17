import { ElementType, FC } from "react";

export type Props =
    {
        component: React.LazyExoticComponent<FC<Record<string, never>>> | ElementType;
        path: string;
        exact: boolean;
        isAuth: boolean;
    } | {
        component: React.LazyExoticComponent<FC<Record<string, never>>> | ElementType
        path?: undefined;
        exact?: undefined;
        isAuth?: undefined;
    };
