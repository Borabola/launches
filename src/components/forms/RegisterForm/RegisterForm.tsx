import {
	Box,
	Button,
	Link,
	TextField, Typography
} from "@material-ui/core";
import { Formik } from "formik";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useStyles } from "./RegisterForm.styles";
import { Props } from "./RegisterForm.types";
import { validationSchema } from "./RegisterForm.schema";

export const RegisterForm: FC<Props> = ({
	initialValues, onSubmit
}) => {
	const classes = useStyles();

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			{({
				errors,
				handleBlur,
				handleChange,
				handleSubmit,
				isSubmitting,
				touched,
				values
			}) => (
				<form
					onSubmit={handleSubmit}
					className={classes.pageContent}
				>
					<Box mb={3}>
						<Typography
							variant="h2"
							align="center"
						>
							Create new account
						</Typography>
						<Typography
							color="#ffffff"
							gutterBottom
							variant="body2"
							align="center"
						>
							Use your email to create new account
						</Typography>
					</Box>

					<TextField
						error={Boolean(touched.email && errors.email)}
						fullWidth
						helperText={touched.email && errors.email}
						label="Email Address"
						margin="normal"
						name="email"
						onBlur={handleBlur}
						onChange={handleChange}
						type="email"
						value={values.email}
						variant="outlined"
					/>
					<TextField
						error={Boolean(touched.password && errors.password)}
						fullWidth
						helperText={touched.password && errors.password}
						label="Password"
						margin="normal"
						name="password"
						onBlur={handleBlur}
						onChange={handleChange}
						type="password"
						value={values.password}
						variant="outlined"
					/>
					<TextField
						error={Boolean(touched.passwordConfirm && errors.passwordConfirm)}
						fullWidth
						helperText={touched.passwordConfirm && errors.passwordConfirm}
						label="Password Confirm"
						margin="normal"
						name="passwordConfirm"
						onBlur={handleBlur}
						onChange={handleChange}
						type="password"
						value={values.passwordConfirm}
						variant="outlined"
					/>

					<Box mt={2}>
						<Button
							color="primary"
							disabled={isSubmitting}
							fullWidth
							type="submit"
							variant="contained"
						>
							Sign up now
						</Button>
					</Box>
					<Box mt={2}>
						<Typography
							color="#ffffff"
							variant="body1"
						>
							Have an account? {"   "}
							<Link
								component={RouterLink}
								to="login"
								variant="body1"
							>
								Sign in
							</Link>
						</Typography>
					</Box>
				</form>
			)}
		</Formik>
	);
};

export default RegisterForm;
