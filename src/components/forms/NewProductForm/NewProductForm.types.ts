import { FormikHelpers } from "formik";
//import * as Yup from "yup";
import { IProductValues } from "firebase/actions";

export interface IInitialValues {
	productName: string,
	file: string,
	productQnt: number,
}
/*interface IValidationSchema {
	//productName: Yup.StringSchema,
	productName: RequiredStringSchema<string | undefined, AnyObject>
	file: Yup.StringSchema,
	productQnt: Yup.NumberSchema,
}*/

export type Props = {
	initialValues: IInitialValues,
	validationSchema: unknown,
	onSubmit: (values: IProductValues, form:FormikHelpers<IProductValues>) => void,
	onInputChange: (files: File[]) => void
};