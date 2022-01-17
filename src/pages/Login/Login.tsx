import { FormikHelpers } from "formik";
import { FC } from "react";
import { useLocation } from "react-router";
import * as Yup from "yup";
import { LoginForm } from "../../components/forms/LoginForm";
import { stateType, Values } from "../../components/forms/LoginForm/LoginForm.types";
import { useAuth } from "../../contexts/AuthContext";
import { LoginLayout } from "../../layouts/LoginLayout";
import { AppRoute } from "../../utils/const";

export const Login: FC = () => {
	const { state } = useLocation<stateType>();
	const authContext = useAuth();
	if (authContext === null) {
		return null;
	}
	const { login } = authContext;
	const currentState = state || { from: { pathname: AppRoute.DASHBOARD } };

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

	const validationSchema =
		Yup.object().shape({
			email: Yup.string().email("Must be a valid email")
				.max(255).required("Email is required"),
			password: Yup.string().max(255).required("Password is required")
		});

	return (
		<LoginLayout>
			<LoginForm
				initialValues={initialValuesLogin}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
				pathFrom={currentState}
			/>
		</LoginLayout>
	);
};
