interface IInitialValues {
	email: string,
	password: string
}
interface IValidationSchema {
	email: string,
	password: string
}

export type Props = {
	initialValues: IInitialValues,
	validationSchema: IValidationSchema,
	onSubmit: (values:IInitialValues, form:unknown) => void
};