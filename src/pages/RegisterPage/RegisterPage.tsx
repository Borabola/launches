import { FormikHelpers } from "formik";
import { FC } from "react";
import { RegisterForm } from "../../components/forms/RegisterForm";
import { IInitialValues } from "../../components/forms/RegisterForm/RegisterForm.types";
import { useAuth } from "../../contexts/AuthContext";
import { FormLayout } from "../../layouts/FormLayout";

export const RegisterPage: FC = () => {
	const authContext = useAuth();
	if (authContext === null) {
		return null;
	}
	const { signup } = authContext;

	const initialValuesSignIn = { email: "", password: "", passwordConfirm: "" };

	const onSubmit = (
		values: IInitialValues, form: FormikHelpers<IInitialValues>
	) => {
		signup(values);
		form.setSubmitting(false);
	};

	return (
		<FormLayout>
			<RegisterForm
				initialValues={initialValuesSignIn}
				onSubmit={onSubmit}
			/>
		</FormLayout>
	);
};
