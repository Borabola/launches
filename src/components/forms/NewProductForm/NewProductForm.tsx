import {
	Box, Button, TextField, Typography
} from "@material-ui/core";
import { Formik } from "formik";
import { FC } from "react";
//import { useDropzone } from "react-dropzone";
import { Form } from "react-formik-ui";
import { useIntl } from "react-intl";
import { Dropzone } from "./Dropzone";
import { validationSchema } from "./NewProductForm.schema";
import { useStyles } from "./NewProductForm.styles";
import type { Props } from "./NewProductForm.types";

export const NewProductForm: FC<Props> =
	({ initialValues, onSubmit }) => {
		const intl = useIntl();
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
					isSubmitting,
					touched,
					values
				}) => (
					<Form className={classes.pageContent}>
						<Box mb={3}>
							<Typography
								align="center"
								variant="h2"
								mb="15px"
								mt="15px"
							>
								{intl.formatMessage({ id: "newProduct" })}
							</Typography>
						</Box>
						<TextField
							error={Boolean(touched.productName && errors.productName)}
							fullWidth
							helperText={touched.productName && errors.productName}
							label={intl.formatMessage({ id: "productName" })}
							margin="normal"
							name="productName"
							onBlur={handleBlur}
							onChange={handleChange}
							type="text"
							value={values.productName}
							variant="outlined"
							color="secondary"
							className={classes.textField}
						/>
						<TextField
							error={Boolean(touched.productQnt && errors.productQnt)}
							fullWidth
							helperText={touched.productQnt && errors.productQnt}
							label={intl.formatMessage({ id: "productQuantity" })}
							margin="normal"
							name="productQnt"
							onBlur={handleBlur}
							onChange={handleChange}
							type="number"
							value={values.productQnt}
							variant="outlined"
							color="secondary"
						/>
						<Dropzone name="file" />

						<Box mt={4}>
							<Button
								color="secondary"
								disabled={isSubmitting}
								fullWidth
								type="submit"
								variant="contained"
							>
								{intl.formatMessage({ id: "addNewProduct" })}
							</Button>
						</Box>
					</Form>
				)}
			</Formik>
		);
	};
