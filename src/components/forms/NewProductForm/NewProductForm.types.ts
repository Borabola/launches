import { IProductValues } from "firebase/actions";
import { FormikHelpers } from "formik";

export interface IInitialValues {
	productName: string,
	file: string,
	productQnt: number,
}

export type Props = {
	initialValues: IInitialValues,
	onSubmit: (values: IProductValues, form: FormikHelpers<IProductValues>) => void,
	onInputChange: (files: File[]) => void
};
