import { Database } from "@firebase/database";
import { FirebaseStorage } from "@firebase/storage/dist/storage-public";
import { ref, set } from "firebase/database";
import {
	getDownloadURL, ref as storeRef, uploadBytesResumable
} from "firebase/storage";
import { showAddProductFailToast, showAddProductSuccessToast } from "../utils/toastHelper";
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

export const uploadFile = async (
	file: File, userUid: string, storage: FirebaseStorage
): Promise<string> => {
	const fileRef = storeRef(
		storage,
		"images/" + userUid + "/"+ file.name
	);
	await uploadBytesResumable(
		fileRef,
		file
	);
	const fileUrl = await getDownloadURL(fileRef);
	return fileUrl;
};
