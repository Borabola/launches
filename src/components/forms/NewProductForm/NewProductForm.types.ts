import { ProductValues } from "firebase/actions.types";
import { FormikHelpers } from "formik";

export interface InitialValues {
	productName: string,
	file: File | null,
	productQnt: number,
}

export type Props = {
	initialValues: InitialValues,
	onSubmit: (values: ProductValues, form: FormikHelpers<ProductValues>) => void,
	//onInputChange: (files: File[]) => void
};
