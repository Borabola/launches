import {
	getDownloadURL, ref as storeRef, uploadBytesResumable
} from "firebase/storage";
import { FormikHelpers } from "formik";
import { FC } from "react";
import { NewProductForm } from "../../components/forms/NewProductForm";
import { useAuth } from "../../contexts/AuthContext";
import { setProductToDatabase } from "../../firebase/actions";
import {
	AuthCurrentUser,
	ProductValues
} from "../../firebase/actions.types";
import { database, storage } from "../../firebase/firebaseConfig";
//import { firebaseUpload } from "../../firebase/hooks/useFirebaseUpload";
import { FormWithHeaderLayout } from "../../layouts/FormWithHeaderLayout";

export const AddProductPage: FC = () => {
	const initialValuesAddProduct = { productName: "", file: null, productQnt: 0 };

	const authContext = useAuth();
	if (authContext === null) {
		return null;
	}
	const { currentUser } = authContext as AuthCurrentUser;

	const onSubmit = async (
		values: ProductValues,
		form: FormikHelpers<ProductValues>
	) => {
		if (values.file) {
			const fileRef = storeRef(
				storage,
				//"images/" + userUid + "/" + file.name
				`images/${currentUser.userId}/${values.file.name}`
			);
			const uploadTask = uploadBytesResumable(
				fileRef,
				values.file
			);
			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log("Upload is " + progress + "% done");
					//unsubscribe();
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
						setProductToDatabase(
							currentUser.userId,
							values,
							downloadURL,
							database
						);
					});
				}
			);
		}
		if (!values.file) {
			console.log(
				"null",
				values.file
			);
			const fileUrl = null;
			setProductToDatabase(
				currentUser.userId,
				values,
				fileUrl,
				database
			);
		}
		form.setSubmitting(false);
		form.resetForm();

	};

	return (
		<FormWithHeaderLayout>
			<NewProductForm
				initialValues={initialValuesAddProduct}
				onSubmit={onSubmit}
			//onInputChange={onInputChange}
			/>
		</FormWithHeaderLayout>
	);
};
