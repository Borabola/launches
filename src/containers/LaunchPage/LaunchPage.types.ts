import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { CurrentLaunchAdapterType } from "../../utils/adapter";

export type Props = {
    currentLaunch: CurrentLaunchAdapterType | null,
    isCurrentFetching: boolean,
    lunchCurrentError: FetchBaseQueryError | SerializedError | undefined
};
