import {
	Box,
	Container
} from "@material-ui/core";
import { FormikHelpers } from "formik";
import { FC } from "react";
import { useLocation } from "react-router";
import * as Yup from "yup";
import { LoginForm } from "../../components/forms/LoginForm";
import { stateType, Values } from "../../components/forms/LoginForm/LoginForm.types";
import { useAuth } from "../../contexts/AuthContext";
import { AppRoute } from "../../utils/const";

/*export type stateType = {
	from: { pathname: string }
};*/

const Login: FC = () => {
	const { state } = useLocation<stateType>();
	const authContext = useAuth();
	if (authContext === null) {
		return null;
	}
	const { login } = authContext;
	const currentState = state || { from: { pathname: AppRoute.DASHBOARD } };
	console.log(
		"currentState",
		currentState
	);

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
		<Box
			display={"flex"}
			flexDirection={"column"}
			height="100vh"
			justifyContent="center"
		>
			<Container maxWidth="sm" >
				<LoginForm
					initialValues={initialValuesLogin}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
					pathFrom={currentState}
				/>
			</Container>
		</Box>
	);
};

export default Login;
