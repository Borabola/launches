import { AuthValues } from "../../contexts/AuthContext.types";
import { Ensure } from "../../types/helper";

export type AuthCurrentUser = Ensure<AuthValues, "currentUser">;
