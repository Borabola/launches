import { IValue } from "../../contexts/AuthContext.types";
import { Ensure } from "../../utils/helper";

export type IAuthCurrentUserId = Ensure<IValue, "currentUserId">;
