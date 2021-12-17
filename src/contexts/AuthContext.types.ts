import React from "react";

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

export interface IValue {
	currentUser: string | null;
	currentUserId: string | 0;
	login: ({ email, password }:SProps) => Promise<void>
	signup: ({
		email, password
	}: SProps) => Promise<void>;
	logout: () => Promise<void>;
	googlePopupSignIn: () => Promise<void>;
}