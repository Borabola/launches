import { FormikHelpers } from "formik";

export interface IInitialValues {
	email: string,
	password: string,
	passwordConfirm: string
}

export interface IValidationSchema {
	email: string,
	password: string,
	passwordConfirm: string
}

export type Props = {
	initialValues: IInitialValues,
	//validationSchema: IValidationSchema,
	validationSchema: unknown,
	onSubmit: (values:IInitialValues, form:FormikHelpers<IInitialValues>) => void,
	//onInputChange: () => void
};