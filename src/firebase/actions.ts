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
		"images/" + userUid + "/" + file.name
	);

	/*const uploadTask = */uploadBytesResumable(
		fileRef,
		file
	);
	////
	/*uploadTask.on(
		"state_changed",
		(snapshot) => {
			// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
			const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			console.log("Upload is " + progress + "% done");
		},
		(error) => {
			// A full list of error codes is available at
			// https://firebase.google.com/docs/storage/web/handle-errors
			switch (error.code) {
				case "storage/unauthorized":
					console.error(
						"storage/unauthorized",
						error
					);
					break;
				case "storage/canceled":
					// User canceled the upload
					console.error(
						"storage/canceled",
						error
					);
					break;

				// ...

				case "storage/unknown":
					// Unknown error occurred, inspect error.serverResponse
					console.error(
						"storage/unknown",
						error
					);
					break;
			}
		},
		() => {
			// Upload completed successfully, now we can get the download URL
			getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
				console.log(
					"File available at",
					downloadURL
				);
			});
		}
	);*/

	////
	const fileUrl = await getDownloadURL(fileRef);
	return fileUrl;
};
