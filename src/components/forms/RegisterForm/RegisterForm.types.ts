interface IInitialValues {
	email: string,
	password: string,
	passwordConfirm: string
}
interface IValidationSchema {
	email: string,
	password: string,
	passwordConfirm: string
}

export type Props = {
	initialValues: IInitialValues,
	validationSchema: IValidationSchema,
	onSubmit: (values:IInitialValues, form:unknown) => void,
	onInputChange: () => void
};