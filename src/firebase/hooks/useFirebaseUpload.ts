import {
	getDownloadURL, ref as storeRef,
	StorageError, StorageReference, uploadBytesResumable,
	UploadTaskSnapshot
} from "firebase/storage";
import { useState } from "react";
//import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { AuthCurrentUser } from "../actions.types";
import { storage } from "../firebaseConfig";

export const useFirebaseUpload = (file: File) => {
	const authContext = useAuth();

	if (authContext === null) {
		return null;
	}

	const { currentUser } = authContext as AuthCurrentUser;
	const [fileUrl, setFileUrl] = useState<string | null>(null);
	const [progress, setProgress] = useState<number>(0);
	const [error, setError] = useState<string | null>(null);

	const progressHandlerCreator = (snapshot: UploadTaskSnapshot) => {

		setProgress(snapshot.bytesTransferred / snapshot.totalBytes * 100);
		//console.log(progress + "% done");
		unsubscribe();
	};

	const errorHandlerCreator = (error: StorageError): void => {
		console.log(error);
		setError(error.message);
		//throw error;
	};

	const uploadFinishHandlerCreator = async (fileRef: StorageReference) => {
		const currentFile = await getDownloadURL(fileRef);
		setFileUrl(currentFile);
	};

	const fileRef = storeRef(
		storage,
		`images/${currentUser.userId}/${file.name}`
	);

	const uploadTask = uploadBytesResumable(
		fileRef,
		file
	);

	const unsubscribe = uploadTask.on(
		"state_changed",
		progressHandlerCreator,
		errorHandlerCreator,
		() => uploadFinishHandlerCreator(fileRef)

		/*getDownloadURL(uploadTask.snapshot.ref).then((url) => {
			onComplete(url);
			});*/
	);

	return { fileUrl, progress, error };
};
