import CryptoJS from "crypto-js";
import AES from "crypto-js/aes";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import {
	HOURS, KEY, MAX_FILE_SIZE, MINUTE, SECONDS, SUPPORTED_FORMATS
} from "./const";
dayjs.extend(isSameOrAfter);

export const isDevelopment = (): boolean => process.env.NODE_ENV === "development";

export const getTimeFormate = (endtime: string): string | 0 => {
	if ((Date.parse(endtime)) !== Date.now()) {
		const t = Date.parse(endtime) - Date.now();
		const seconds = Math.floor((t / 1000) % SECONDS);
		const minutes = Math.floor((t / 1000 / MINUTE) % MINUTE);
		const hours = Math.floor((t / (1000 * SECONDS * MINUTE)) % HOURS);
		const days = Math.floor(t / (1000 * SECONDS * MINUTE * HOURS));
		return (
			(days <= 9 ? `0` + days : days) +
			` : ` +
			(hours <= 9 ? `0` + hours : hours) +
			` : ` +
			(minutes <= 9 ? `0` + minutes : minutes) +
			` : ` +
			(seconds <= 9 ? `0` + seconds : seconds)
		);
	}

	return 0;
};

// encrypt user info
export const encryptUserInfo = (authData: JSON): void => {
	const authDataForLocalStorage = AES.encrypt(
		JSON.stringify(authData),
		KEY
	);
	localStorage.setItem(
		"auth",
		authDataForLocalStorage.toString()
	);
};

// decrypt user info
export const deryptUserInfo = (): string | null => {
	const authData = localStorage.getItem("auth")?.toString();
	if (authData) {
		const decryptedAuthData = AES.decrypt(
			authData,
			KEY
		);
		return JSON.parse(decryptedAuthData?.toString(CryptoJS.enc.Utf8));
	} else {
		return null;
	}
};

export const checkIfFileIsCorrectType = (file: File): boolean => {
	let valid = true;
	if (!SUPPORTED_FORMATS.includes(file.type)) {
		valid = false;
	}
	return valid;
};

export const checkIfFileIsTooBig = (file: File): boolean => {
	let valid = true;
	const size = file.size;
	if (size > MAX_FILE_SIZE) {
		valid = false;
	}

	return valid;
};

export type RequiredNotNull<T> = {
	[P in keyof T]: NonNullable<T[P]>
};

export type Ensure<T, K extends keyof T> = T & RequiredNotNull<Pick<T, K>>;
