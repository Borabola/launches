import { Database } from "@firebase/database";
import { FirebaseStorage } from "@firebase/storage/dist/storage-public";
import { ref, set } from "firebase/database";
import {
	getDownloadURL, ref as storeRef, uploadBytes
} from "firebase/storage";
import { isDevelopment } from "utils/helper";
import {
	showAddProductFailToast, showAddProductSuccessToast, showServerDetail
} from "../utils/toastHelper";
import { ProductValues } from "./actions.types";

export const setProductToDatabase = (
	currentUserId: string,
	values: ProductValues,
	fileUrl: string | null,
	database: Database,
) => {
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
	)
		.then(() => {
			showAddProductSuccessToast();
		})
		.catch(() => {
			showAddProductFailToast();
		});
};

export const uploadFileAndSaveToDB = (
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
	return uploadBytes(
		fileRef,
		values.file
	)
		.then(snapshot => {
			return getDownloadURL(snapshot.ref);
		})
		.then(downloadURL => {
			setProductToDatabase(
				userUid,
				values,
				downloadURL,
				database
			);
		})
		.catch((error) => {
			isDevelopment() && console.error(error);
			showServerDetail(error.code);
		});
};
