import {
	Box, List, Paper, Typography
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { ListItem } from "@mui/material";
import { useField } from "formik";
//import type { FC } from "react";
import {
	useCallback, useEffect, useState
} from "react";
import { useDropzone } from "react-dropzone";
import { useStyles } from "./Dropzone.styles";

export const Dropzone = ({ name }: { name: string }) => {
	const classes = useStyles();
	const [shownFile, setShownFile] = useState<File | null>(null);
	const [, , helpers] = useField(name);
	const { setValue } = helpers;

	useEffect(
		() => {
			if (shownFile) {
				setValue(shownFile);
				// helpers.setTouched(true);
			} else {
				setValue(null);
			}
		},
		[shownFile]
	);

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
	));

	return (
		<>
			<Box
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
			<List> {fileRejectionItems}</List>
		</>
	);
};
