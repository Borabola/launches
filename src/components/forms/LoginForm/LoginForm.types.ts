import { Formik, FormikHelpers } from "formik";
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
type FormikParams = Parameters<typeof Formik>[0];
export type Props = Pick<FormikParams,
"initialValues" | "validationSchema" | "onSubmit">;
/* export type Props = {
	initialValues: Values,
	//validationSchema: Yup.InferType<Values>,
	//validationSchema: Schema | ((props: Props) => Schema),
	validationSchema: ValidationValues,
	onSubmit: (values:Values, form: FormikHelpers<Values>) => void
}; */