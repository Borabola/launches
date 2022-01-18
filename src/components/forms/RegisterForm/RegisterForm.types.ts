import { FormikHelpers } from "formik";

export interface InitialValues {
	email: string,
	password: string,
	passwordConfirm: string
}

export type Props = {
	initialValues: InitialValues,
	onSubmit: (values: InitialValues, form: FormikHelpers<InitialValues>) => void,
};
