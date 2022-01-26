import { FormikHelpers } from "formik";
import { FC } from "react";
import { NewProductForm } from "../../components/forms/NewProductForm";
import { useAuth } from "../../contexts/AuthContext";
import {
	setProductToDatabase,
	uploadFile
} from "../../firebase/actions";
import {
	AuthCurrentUser,
	ProductValues
} from "../../firebase/actions.types";
import { database, storage } from "../../firebase/firebaseConfig";
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
		console.log(values);
		if (values.file) {
			console.log(values.file);
			const currentFileUrl = await uploadFile(
				values.file,
				currentUser.userId,
				storage
			);
			setProductToDatabase(
				currentUser.userId,
				values,
				currentFileUrl,
				database
			);

			form.setSubmitting(false);
			form.resetForm();
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

			form.setSubmitting(false);
			form.resetForm();
		}
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
