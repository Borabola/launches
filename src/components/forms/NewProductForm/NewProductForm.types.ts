interface IInitialValues {
	productName: string,
	file: File,
	productQnt: number,
}
interface IValidationSchema {
	productName: string,
	file: File,
	productQnt: number,
}

export type Props = {
	initialValues: IInitialValues,
	validationSchema: IValidationSchema,
	onSubmit: (values:IInitialValues, form:unknown) => void,
	onInputChange: () => void
};