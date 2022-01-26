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
		/*const [shownFile, setShownFile] = useState<File | null>(null);

		const onDrop = useCallback(
			acceptedFiles => {
				//onInputChange(acceptedFiles);
				setShownFile(acceptedFiles[0]);
			},
			[]
		);

		const {
			acceptedFiles,
			fileRejections,
			getRootProps,
			getInputProps,
			isDragActive = true
		} = useDropzone({
			onDrop,
			accept: "image/jpeg, image/jpg, image/png"
		});

		const { ref, ...rootProps } = getRootProps();

		const onDelete = () => {
			acceptedFiles.shift();
			setShownFile(null);
		};

		const getAcceptedFileItems = (shownFile: File) => (
			<ListItem key={shownFile.name} >
				{shownFile.name} - {shownFile.size} bytes
				<IconButton onClick={onDelete}>
					<CloseOutlinedIcon color="primary" />
				</IconButton>
			</ListItem>
		);

		const fileRejectionItems = fileRejections.map(({ file }) => (
			<ListItem key={file.name} >
				{file.name} - {file.size} bytes
			</ListItem>
		));*/

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

						{/*<Box
							ref={ref}
							className={classes.dropzoneStyle}
						>
							<Paper {...rootProps}>
								<input {...getInputProps()} />
								<p>Drag drop image file here, or click to select it</p>
								{
									isDragActive &&
									<p>Drop the files here ...</p>
								}
							</Paper>
						</Box>
						<Typography variant="h5">Accepted files</Typography>
						{shownFile && <List> {getAcceptedFileItems(shownFile)}</List>}

						<Typography variant="h5">Rejected files</Typography>
						<List> {fileRejectionItems}</List>*/}

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
