import {
	Box, Button, List, Paper, TextField, Typography
} from "@material-ui/core";
import { ListItem } from "@mui/material";
import { Formik } from "formik";
import { FC, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Form } from "react-formik-ui";
import { useIntl } from "react-intl";
import { useStyles } from "./NewProductForm.styles";
import type { Props } from "./NewProductForm.types";
import { validationSchema } from "./NewProductForm.schema";

export const NewProductForm: FC<Props> =
	({ initialValues, onSubmit, onInputChange }) => {
		const intl = useIntl();
		const classes = useStyles();
		const onDrop = useCallback(
			acceptedFiles => {
				onInputChange(acceptedFiles);
			},
			[]
		);
		const {
			acceptedFiles,
			fileRejections,
			getRootProps,
			getInputProps,
		} = useDropzone({
			onDrop,
			accept: "image/jpeg, image/png"
		});

		const { ref, ...rootProps } = getRootProps();

		const acceptedFileItems = acceptedFiles.map((file) => (
			<ListItem key={file.name} >
				{file.name} - {file.size} bytes
			</ListItem>
		));

		const fileRejectionItems = fileRejections.map(({ file }) => (
			<ListItem key={file.name} >
				{file.name} - {file.size} bytes
			</ListItem>
		));

		return (
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}

				onInputChange={onInputChange}

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

						<Box
							ref={ref}
							className={classes.dropzoneStyle}
						>
							<Paper {...rootProps}>
								<input {...getInputProps()} />
								<p>Drag drop some files here, or click to select files</p>
							</Paper>

						</Box>
						<Typography variant="h5">Accepted files</Typography>
						<List> {acceptedFileItems}</List>
						<Typography variant="h5">Rejected files</Typography>
						<List> {fileRejectionItems}</List>
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
