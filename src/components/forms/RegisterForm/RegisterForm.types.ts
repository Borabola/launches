import { FormikHelpers } from "formik";

export interface IInitialValues {
	email: string,
	password: string,
	passwordConfirm: string
}

export type Props = {
	initialValues: IInitialValues,
	onSubmit: (values: IInitialValues, form: FormikHelpers<IInitialValues>) => void,
};
