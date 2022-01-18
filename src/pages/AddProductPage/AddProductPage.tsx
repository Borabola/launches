import { FormikHelpers } from "formik";
import { FC, useState } from "react";
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
	const [fileUrl, setFileUrl] = useState<string | null>(null);
	const initialValuesAddProduct = { productName: "", file: "", productQnt: 0 };

	const authContext = useAuth();
	if (authContext === null) {
		return null;
	}
	const { currentUser } = authContext as AuthCurrentUser;

	const onInputChange = async (files: File[]) => {
		if (files.length === 0) {
			setFileUrl(null);
			return;
		}
		const currentFileUrl = await uploadFile(
			files[0],
			storage
		);
		setFileUrl(currentFileUrl);
	};

	const onSubmit = (
		values: ProductValues,
		form: FormikHelpers<ProductValues>
	) => {
		setProductToDatabase(
			currentUser.userId,
			values,
			fileUrl,
			database
		);

		form.setSubmitting(false);
		form.resetForm();
	};

	return (
		<FormWithHeaderLayout>
			<NewProductForm
				initialValues={initialValuesAddProduct}
				onSubmit={onSubmit}
				onInputChange={onInputChange}
			/>
		</FormWithHeaderLayout>
	);
};
