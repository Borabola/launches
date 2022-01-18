import { AuthValues } from "../../../contexts/AuthContext.types";

export type IAuth = Pick<AuthValues, "currentUser" | "logout">;

export type Props = {
	isMain?: boolean;
};
