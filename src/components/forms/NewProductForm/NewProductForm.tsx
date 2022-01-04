import {FC, useCallback} from "react";
import { Formik } from "formik";
import { makeStyles } from "@mui/styles";
import {
	Box, Button, TextField, Typography, Theme, Paper, List
} from "@material-ui/core";
import { useIntl } from "react-intl";
import { Form } from "react-formik-ui";
import "./style.scss";
import {useDropzone} from "react-dropzone";
import type { Props } from "./NewProductForm.types";
import { ListItem } from "@mui/material";


const useStyles = makeStyles((theme: Theme) => ({
	pageContent: {
		"& fieldset": {
			borderColor: theme.palette.secondary.main,
			"&:hover": {
				borderColor: theme.palette.secondary.main,
			},
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
			dropzoneStyle: {
				border: "1px solid red !important",
				borderRadius: "2px !important",
			},
		},
		"& label.Mui-focused": {
			color: "#4A00E0",
		},
		"& .react-formik-ui .form-element .dropzone-wrapper .dropzone": {
			borderColor: theme.palette.secondary.main,
			backgroundcolor:  theme.palette.primary.main,
		},
	},
	textField: {
		"&::placeholder": {
			borderColor: theme.palette.secondary.main,
		},
		"&:hover": {
			borderColor: theme.palette.secondary.main,
		},
		"label": {
			color: theme.palette.secondary.main,
		}
	},
	fileField: {
		"& label": {
			display: "none",
		}
	},
	dropzoneStyle: {
		border: "1px solid #FFFFFF !important",
		borderRadius: "5px !important",
		backgroundColor: "#181B48 !important",
		color: "#FFFFFF !important",
		"& .MuiPaper-root": {
			margin: 0 ,
			backgroundColor: "transparent",
			boxShadow: "none",
			borderRadius: 0,
			color: "#FFFFFF",
			padding: "0 16px"
		}

	},
	previewChip: {
		minWidth: 160,
		maxWidth: 210
	  },
}));

export const NewProductForm: FC<Props> =
({ initialValues, validationSchema, onSubmit, onInputChange }) => {
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
	  } = useDropzone({onDrop,
		accept: "image/jpeg, image/png"});

	const {ref, ...rootProps} = getRootProps();

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

					{/*<DropzoneArea
						showPreviews={false}
						showPreviewsInDropzone={false}
						previewText="Selected files"
					/> */}


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

