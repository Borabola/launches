import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { CurrentLaunchAdapterType } from "../../redux/services/adapter.types";

export type Props = {
    currentLaunch: CurrentLaunchAdapterType | null,
    isCurrentFetching: boolean,
    lunchCurrentError: FetchBaseQueryError | SerializedError | undefined
};
