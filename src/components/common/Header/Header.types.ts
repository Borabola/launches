import { IValue } from "../../../contexts/AuthContext.types";

export type IAuth = Pick<IValue, "currentUser" | "logout">;

export type Props = {
	isMain?: boolean;
};
