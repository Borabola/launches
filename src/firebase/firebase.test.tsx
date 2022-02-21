import * as ftest from "@firebase/rules-unit-testing";
import { assertFails, assertSucceeds } from "@firebase/rules-unit-testing";
import { storage } from "firebase-admin";
import {
	deleteObject, ref as storeRef, uploadBytes, getDownloadURL
} from "firebase/storage";
import * as fs from "fs";
import { auth } from "../firebase/firebaseConfig";
import {
	connectAuthEmulator,
	createUserWithEmailAndPassword
} from "firebase/auth";
import {FirebaseError} from "../contexts/AuthContext.types";
//import { toArrayBuffer } from "../utils/testHelper";

const MY_PROJECT_ID = process.env.REACT_APP_FIREBASE_API_KEY;

const testUser = { email: "user123@test.com", password: "123456",};

let testEnv: ftest.RulesTestEnvironment;

//const loadIconImage = fs.readFileSync("src/firebase/_mock/test-image.jpeg");

/*beforeAll(async () => {
	testEnv = await ftest.initializeTestEnvironment({
		//projectId: "demo-users-storage-rules-test",
		projectId: MY_PROJECT_ID,
		storage: {
			rules: fs.readFileSync(
				"./storage.rules",
				"utf8"
			),
		}
	});
});

beforeEach(async () => {
	jest.setTimeout(70000);
	await testEnv.clearStorage();
	return;
});

afterAll(async () => {
	await testEnv.cleanup();
	return;
});*/

describe(
	"Firestore security rules",
	() => {

		it(
			"cannot read from storage .unauthenticatedContext",
			async () => {
				testEnv = await ftest.initializeTestEnvironment({
					//projectId: "demo-users-storage-rules-test",
					projectId: MY_PROJECT_ID,
					storage: {
						rules: fs.readFileSync(
							"./storage.rules",
							"utf8"
						),
					}
				});

				const alice = testEnv.unauthenticatedContext();
				const desertRef = storeRef(
					alice.storage(),
					"images/desert.jpg"
				);
				await assertFails(deleteObject(desertRef));
			}
		);

		it(
			"can read from storage with auth",
			async () => {
				testEnv = await ftest.initializeTestEnvironment({
					//projectId: "demo-users-storage-rules-test",
					projectId: MY_PROJECT_ID,
					storage: {
						rules: fs.readFileSync(
							"./storage.rules",
							"utf8"
						),
					}
				});

				connectAuthEmulator(
					auth,
					"http://localhost:9099"
				);
				try {
					await createUserWithEmailAndPassword(
						auth,
						testUser.email,
						testUser.password
					);
					const oobCodes = await fetch(`http://localhost:9099/emulator/v1/projects/
					${MY_PROJECT_ID}/oobCodes`);
					console.log(oobCodes);

				} catch (error) {
					throw new Error((error as FirebaseError).code);
				}

				const path = `images/${userAuth.userId}/test-image.jpeg`;

				/*await testEnv.withSecurityRulesDisabled(async (context) => {
					const pictureReference = storeRef(
						context.storage(),
						path
					);
					await uploadBytes(
						pictureReference,
						loadIconImage
					);
				});

				await assertSucceeds(getDownloadURL(storeRef(
					alice.storage(),
					path
				)));*/
				await testEnv.cleanup();
			}
		);
	}
);
