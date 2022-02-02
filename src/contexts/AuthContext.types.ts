import React from "react";
import { stateType } from "../components/forms/LoginForm/LoginForm.types";

export type Props = {
	children?: React.ReactNode;
};

export type SProps = {
	email: string,
	password: string,
};

export type FirebaseError = {
	code: string,
	message: string,
	name: string,
};

export type CurrentUser = {
	email: string | null,
	userId: string
};

export interface AuthValues {
	currentUser: CurrentUser | null;
	login: ({ email, password }: SProps, { from }: stateType) => Promise<void>
	signup: ({
		email, password
	}: SProps) => Promise<void>;
	logout: () => Promise<void>;
	googlePopupSignIn: ({ from }: stateType) => Promise<void>;
}
