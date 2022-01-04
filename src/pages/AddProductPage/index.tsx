import { FC, useState } from "react";
import {
	Box,
	Container,
} from "@material-ui/core";
import * as Yup from "yup";
import { FormikHelpers } from "formik";
import { PageLayout } from "../../layouts/PageLayout";
import { NewProductForm } from "../../components/forms/NewProductForm";
import { database, storage } from "../../firebase/firebaseConfig";
import {
	setInfoToDatabase, uploadFile, IProductValues, IAuthCurrentUserId
} from "../../firebase/actions";
//import {IInitialValues} from "../../components/forms/NewProductForm/NewProductForm.types";

import { useAuth } from "../../contexts/AuthContext";


const AddProductPage: FC = () => {
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
		<PageLayout>
			<Box
				display={"flex"}
				flexDirection={"column"}
				justifyContent="center"
				flexGrow="1"
			>
				<Container maxWidth="sm" >
					<NewProductForm
						initialValues={initialValuesAddProduct}
						onSubmit={onSubmit}
						validationSchema={validationSchema}
						onInputChange={onInputChange}
					/>
				</Container>
			</Box>
		</PageLayout>
	);
};

export default AddProductPage;
