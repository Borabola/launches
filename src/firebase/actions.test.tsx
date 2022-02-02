import * as ftest from "@firebase/rules-unit-testing";
import {
	assertFails, assertSucceeds, initializeTestEnvironment
} from "@firebase/rules-unit-testing";
import {
	deleteObject, getDownloadURL, ref as storeRef, FirebaseStorage, uploadBytesResumable
} from "firebase/storage";
import * as fs from "fs";

//type Storage = firebaseApp.storage.Storage; > FirebaseStorage

const userImageRef = (
	storage: FirebaseStorage,
	userId: string,
	imageName: string
) => storeRef(
	storage,
	`images/${userId}/${imageName}`
);
const loadIconImage = () => fs.readFileSync("../../public/logo192.png");

beforeEach(async () => {
	await testEnv.withSecurityRulesDisabled(async context => {
    // put an image to Storage while ignoring the security rule
		await userImageRef(
			context.storage(),
			userId,
			"icon.png"
		).put(loadIconImage()).then();
	});
});
