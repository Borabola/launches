import { FormikHelpers } from "formik";
//import * as Yup from "yup";
import { IProductValues } from "firebase/actions";

export interface IInitialValues {
	productName: string,
	file: string,
	productQnt: number,
}

export type Props = {
	initialValues: IInitialValues,
	validationSchema: unknown,
	onSubmit: (values: IProductValues, form:FormikHelpers<IProductValues>) => void,
	onInputChange: (files: File[]) => void
};