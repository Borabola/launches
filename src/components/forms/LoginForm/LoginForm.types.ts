import { FormikHelpers } from "formik";

export type stateType = {
	from: { pathname: string }
};

export interface Values {
	email: string,
	password: string
}

export type Props = {
	initialValues: Values,
	onSubmit: (values: Values, form: FormikHelpers<Values>) => void
	pathFrom: stateType
};
