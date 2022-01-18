import { FormikHelpers } from "formik";
import { FC } from "react";
import { useLocation } from "react-router";
import { LoginForm } from "../../components/forms/LoginForm";
import { stateType, Values } from "../../components/forms/LoginForm/LoginForm.types";
import { useAuth } from "../../contexts/AuthContext";
import { FormLayout } from "../../layouts/FormLayout";
import { AppRouteEnum } from "../../types/Enums";

export const Login: FC = () => {
	const { state } = useLocation<stateType>();
	const authContext = useAuth();

	if (authContext === null) {
		return null;
	}
	const { login } = authContext;
	const currentState = state || { from: { pathname: AppRouteEnum.DASHBOARD } };

	const initialValuesLogin = { email: "", password: "", };

	const onSubmit = (
		values: Values, form: FormikHelpers<Values>
	) => {
		login(
			values,
			currentState
		);
		form.setSubmitting(false);
	};

	return (
		<FormLayout>
			<LoginForm
				initialValues={initialValuesLogin}
				onSubmit={onSubmit}
				pathFrom={currentState}
			/>
		</FormLayout>
	);
};
