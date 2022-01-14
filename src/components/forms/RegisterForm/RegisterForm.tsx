import {
	Box,
	Button,
	Link,
	TextField, Theme, Typography
} from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { Formik } from "formik";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Props } from "./RegisterForm.types";

const useStyles = makeStyles((theme: Theme) => ({
	pageContent: {
		"& fieldset": {
			borderColor: theme.palette.secondary.main,
			"&:hover": {
				borderColor: theme.palette.secondary.main,
			}
		},
		"& .MuiOutlinedInput-root": {
			"& input": {
				color: theme.palette.secondary.main,
				borderColor: theme.palette.secondary.main,

				"&::placeholder": {
					color: theme.palette.secondary.main,
				},
			},
			"& fieldset": {
				borderColor: theme.palette.secondary.main,
			},
			"&:hover fieldset": {
				borderColor: "#8E2DE2",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#4A00E0",
			},
			"& input::placeholder": {
				color: "#4A00E0",
			},
		},
		"& label.Mui-focused": {
			color: "#4A00E0",
		},
	},
	textField: {
		"&::placeholder": {
			borderColor: theme.palette.secondary.main,
		},
		"&:hover": {
			borderColor: theme.palette.secondary.main,
		}
	},
}));

export const RegisterForm: FC<Props> = ({
	initialValues, validationSchema, onSubmit
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
