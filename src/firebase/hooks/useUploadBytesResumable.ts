import { useAuth } from "contexts/AuthContext";
import { storage } from "firebase/firebaseConfig";
import {
	getDownloadURL, ref as storeRef, StorageError, StorageReference, uploadBytesResumable,
	UploadTask, UploadTaskSnapshot
} from "firebase/storage";
import {
	Dispatch,
	SetStateAction,
	useCallback, useRef, useState
} from "react";
import { isDevelopment } from "utils/helper";

export const useUploadBytesResumable = (file?: File) => {
	const auth = useAuth();

	const [fileUrl, setFileUrl] = useState<string>();
	const [progress, setProgress] = useState<number>(0);
	const [error, setError] = useState<string>();

	const taskRef = useRef<UploadTask>();
	const fileRef = useRef<StorageReference>();

	const uploadTask = useCallback(
		(file: File) => {

			const { currentUser } = auth ?? {};

			if ("undefined" === typeof currentUser
				|| null === currentUser) {
				setError("firebase/hooks/useUploadBytesResumable/unathorized");
				throw new Error(error);
			}

			if (taskRef.current) {
				taskRef.current.cancel();
			}

			fileRef.current = storeRef(
				storage,
				`images/${currentUser.userId}/${file.name}`
			);

			taskRef.current = uploadBytesResumable(
				fileRef.current,
				file
			);

			const unsubscribe = taskRef.current.on(
				"state_changed",
				progressHandlerCreator(setProgress),
				errorHandlerCreator(setError),
				completeHandlerCreator(
					setFileUrl,
					setError,
					fileRef.current
				)
			);

			return { currentTask: taskRef.current, fileRef: fileRef.current, unsubscribe };
		},
		[auth, taskRef]
	);

	if (file && "name" in file) {
		uploadTask(file);
		return { fileUrl, progress, error, uploadTask };
	}

	return { fileUrl, progress, error, uploadTask };
};

const progressHandlerCreator = (progressDispatcher: Dispatch<SetStateAction<number>>) => {
	const handler = (snapshot: UploadTaskSnapshot) => {
		progressDispatcher(snapshot.bytesTransferred / snapshot.totalBytes * 100);
	};

	return handler;
};

const errorHandlerCreator = (errorDispatcher: Dispatch<SetStateAction<string | undefined>>) => {
	const handler = (error: Error) => {
		isDevelopment() && console.error(error);
		errorDispatcher((error as StorageError).code);
	};

	return handler;
};

const completeHandlerCreator = (
	fileUrlDispatcher: Dispatch<SetStateAction<string | undefined>>,
	errorDispatcher: Dispatch<SetStateAction<string | undefined>>,
	fileRef: StorageReference
) => {
	const handler = async () => {
		try {
			fileUrlDispatcher(await getDownloadURL(fileRef));
		} catch (e) {
			isDevelopment() && console.error(e);
			errorDispatcher((e as StorageError).code);
		}
	};
	return handler;
};

export default useUploadBytesResumable;
