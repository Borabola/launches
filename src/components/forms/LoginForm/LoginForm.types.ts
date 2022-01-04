import { FormikHelpers } from "formik";
//import { Schema } from "yup";
import * as Yup from "yup";

export interface Values {
	email: string,
	password: string
}

export interface ValidationValues {
	email: Yup.StringSchema,
	password: Yup.StringSchema
}

export type Props = {
	initialValues: Values,
	validationSchema: unknown,
	onSubmit: (values: Values, form: FormikHelpers<Values>) => void
};
