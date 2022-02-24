
import { Database } from "@firebase/database";
import { FirebaseStorage } from "@firebase/storage/dist/storage-public";

import { ref, set } from "firebase/database";
import {
	getDownloadURL, ref as storeRef, uploadBytes, StorageError
} from "firebase/storage";
import { isDevelopment } from "utils/helper";
import {
	showAddProductFailToast, showAddProductSuccessToast, showServerDetail
} from "../utils/toastHelper";
import { ProductValues } from "./actions.types";

export const setProductToDatabase = async (
	currentUserId: string,
	values: ProductValues,
	fileUrl: string | null,
	database: Database,
) => {
	try {
		set(
			ref(
				database,
				`users/${currentUserId}/products/` + values.productName
			),
			{
				id: Date.now(),
				title: values.productName,
				quantity: values.productQnt,
				product_picture: fileUrl
			}
		);
		showAddProductSuccessToast();
	} catch {
		showAddProductFailToast();
	}
};

export const uploadFileAndSaveToDB = async (
	values: ProductValues,
	userUid: string,
	storage: FirebaseStorage,
	database: Database,
) => {
	if (!values.file) {
		return Promise.resolve(undefined);
	}
	const fileRef = storeRef(
		storage,

		`images/${userUid}/${values.file.name}`
	);
	try {
		const snapshot = await uploadBytes(
			fileRef,
			values.file
		);

		const downloadURL = await getDownloadURL(snapshot.ref);

		setProductToDatabase(
			userUid,
			values,
			downloadURL,
			database
		);
		return true;
	} catch (error) {
		isDevelopment() && console.error(error);
		showServerDetail((error as StorageError).code);
		return true;
	}
};
