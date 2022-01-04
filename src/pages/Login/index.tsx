import {
	Box,
	Container
} from "@material-ui/core";
import { FormikHelpers } from "formik";
import { FC } from "react";
import * as Yup from "yup";
import { LoginForm } from "../../components/forms/LoginForm";
import { Values } from "../../components/forms/LoginForm/LoginForm.types";
import { useAuth } from "../../contexts/AuthContext";

const Login: FC = () => {
	const authContext = useAuth();
	if( authContext === null ) {
		return null;
	}
	const { login } = authContext;

	const initialValuesLogin = { email: "", password: "", };

	const onSubmit = (
		values: Values, form: FormikHelpers<Values>
	) => {
		login(values);
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
					validationSchema ={validationSchema}
				/>
			</Container>
		</Box>
	);
};

export default Login;
