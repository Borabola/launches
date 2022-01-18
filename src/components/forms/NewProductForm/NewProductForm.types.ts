import { ProductValues } from "firebase/actions.types";
import { FormikHelpers } from "formik";

export interface IInitialValues {
	productName: string,
	file: string,
	productQnt: number,
}

export type Props = {
	initialValues: IInitialValues,
	onSubmit: (values: ProductValues, form: FormikHelpers<ProductValues>) => void,
	onInputChange: (files: File[]) => void
};
