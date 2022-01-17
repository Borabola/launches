import { FormikHelpers } from "formik";
import { FC, useState } from "react";
import * as Yup from "yup";
import { NewProductForm } from "../../components/forms/NewProductForm";
import { useAuth } from "../../contexts/AuthContext";
import {
	IAuthCurrentUserId,
	IProductValues,
	setInfoToDatabase,
	uploadFile
} from "../../firebase/actions";
import { database, storage } from "../../firebase/firebaseConfig";
import { FormLayout } from "../../layouts/FormLayout";

export const AddProductPage: FC = () => {
	const [fileUrl, setFileUrl] = useState<string | null>(null);
	const initialValuesAddProduct = { productName: "", file: "", productQnt: 0 };

	const authContext = useAuth();
	if (authContext === null) {
		return null;
	}
	const { currentUserId } = authContext as IAuthCurrentUserId;

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
		values: IProductValues,
		form: FormikHelpers<IProductValues>
	) => {
		setInfoToDatabase(
			currentUserId,
			values,
			fileUrl,
			database
		);

		form.setSubmitting(false);
		form.resetForm();
	};

	const validationSchema =
		Yup.object().shape({
			productName: Yup.string().min(2).max(255).required("Product name is required"),
			file: Yup.mixed()
				.nullable()
				.notRequired(),
			productQnt: Yup.number().min(0)
		});

	return (
		<FormLayout>
			<NewProductForm
				initialValues={initialValuesAddProduct}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
				onInputChange={onInputChange}
			/>
		</FormLayout>
	);
};
