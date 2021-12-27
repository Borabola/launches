import { ref, set } from "firebase/database";
import { FirebaseStorage } from "@firebase/storage-types";
import { Database } from "@firebase/database";
import {
	ref as storeRef, uploadBytesResumable, getDownloadURL
} from "firebase/storage";
import { showAddProductSuccessToast, showAddProductFailToast } from "../utils/toastHelper";
import { IValue } from "../contexts/AuthContext.types";
import { Ensure } from "../utils/helper";

export interface IProductValues {
	id: number;
	productName: string;
	productQnt: number;	
}
export type IAuthCurrentUserId = Ensure<IValue, "currentUserId">;

export const setInfoToDatabase = (
	values:IProductValues, currentUserId: IAuthCurrentUserId, database: Database, fileUrl:string
) => {
	if (currentUserId === null) {
		return;
	}
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
	file:File, storage:FirebaseStorage
):Promise<string> => {
	const fileRef = storeRef(
		storage,
		"images/" + file.name
	);
	await uploadBytesResumable(
		fileRef,
		file
	);
	const fileUrl = await getDownloadURL(fileRef);
	return fileUrl;
};