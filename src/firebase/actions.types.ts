import { AuthValues } from "../contexts/AuthContext.types";
import { Ensure } from "../types/helper";

export interface ProductValues {
    id?: number;
    productName: string;
    productQnt: number;
    file?: File | null;
}
export type AuthCurrentUser = Ensure<AuthValues, "currentUser">;
