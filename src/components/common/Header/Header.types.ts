import { IValue } from "../../../contexts/AuthContext.types";

export type IAuth = Pick<IValue, "currentUser">;

export type Props = {
	isMain?: boolean;
};
