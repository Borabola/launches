import {FC, useRef} from "react";
import { Formik } from "formik";
import { makeStyles } from "@mui/styles";
import {
	Box, Button, TextField, Typography, Theme
} from "@material-ui/core";
import { useIntl } from "react-intl";
import { Form } from "react-formik-ui";
import { DropZone } from "react-formik-ui/dist/components/DropZone/DropZone";
import "./style.scss";
import { DropzoneRootProps, DropzoneInputProps } from "react-dropzone/typings/react-dropzone";
//import { SUPPORTED_FORMATS } from "utils/const";
import type { Props } from "./NewProductForm.types";


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
	},
}));

const dropRef = useRef(null);

export const NewProductForm: FC<Props> = 
({ initialValues, validationSchema, onSubmit, onInputChange }) => {
	const intl = useIntl();
	const classes = useStyles();

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
					<DropZone
						name='file'
						label='Photo upload'
						placeholder='Try dropping files here or click to select files to upload'
						//acceptedFiles={SUPPORTED_FORMATS<File[]>} 
						accept="image/*"
						multiple={false}
						fileInfo={true}
						maxSize={1000000}
						className={classes.dropzoneStyle.toString()}
						isFileDialogActive={true}
						onDrop={onInputChange}
						open={function (): void {
							throw new Error("Function not implemented.");
						} } 
						isFocused={false} 
						isDragActive={false}
						isDragAccept={false} 
						isDragReject={false}
						draggedFiles={[]} 
						acceptedFiles={[]}
						fileRejections={[]} 
						rootRef={dropRef}
						inputRef={dropRef}
						getRootProps={function <T extends DropzoneRootProps>(props?: T): T {
							throw new Error("Function not implemented.");
						} }
						getInputProps={function <T extends DropzoneInputProps>(props?: T): T {
							throw new Error("Function not implemented.");
						} }	
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

