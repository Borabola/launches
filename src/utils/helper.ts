import CryptoJS from "crypto-js";
import AES from "crypto-js/aes";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import {
	KEY, MAX_FILE_SIZE, SUPPORTED_FORMATS
} from "./const";
dayjs.extend(isSameOrAfter);

export const isDevelopment = (): boolean => process.env.NODE_ENV === "development";

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
