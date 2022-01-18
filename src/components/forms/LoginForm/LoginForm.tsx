import {
	Box,
	Button,
	Link,
	TextField, Typography
} from "@material-ui/core";
import { Form, Formik } from "formik";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { useStyles } from "./LoginForm.styles";
import type { Props } from "./LoginForm.types";

export const LoginForm: FC<Props> = ({
	initialValues, validationSchema, onSubmit, pathFrom
}) => {
	const classes = useStyles();
	const authContext = useAuth();

	if (authContext === null) {
		return null;
	}

	const { googlePopupSignIn } = authContext;

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
				isSubmitting,
				touched,
				values
			}) => (
				<Form
					className={classes.pageContent}
				>
					<Box mb={3}>
						<Typography
							align="center"
							variant="h2"
						>
							Login
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
						color="secondary"

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
						color="secondary"

					/>
					<Box mt={4}>
						<Button
							color="secondary"
							disabled={isSubmitting}
							fullWidth
							type="submit"
							variant="contained"
						>
							Sign in now
						</Button>
					</Box>
					<Box mt={2}>
						<Typography
							color="secondary"
							variant="body1"
						>
							Don&apos;t have an account?
							{" "}
							<Link
								component={RouterLink}
								to="/register"
								variant="body1"
							>
								Sign up
							</Link>
						</Typography>
					</Box>
					<Box mt={2}>
						<Button
							onClick={() => googlePopupSignIn(pathFrom)}
							fullWidth={true}
						>
							Login with Google account
						</Button>
					</Box>
				</Form>
			)}
		</Formik>
	);
};
