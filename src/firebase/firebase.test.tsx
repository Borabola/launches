import * as ftest from "@firebase/rules-unit-testing";
import { assertFails, assertSucceeds } from "@firebase/rules-unit-testing";
//import { storage } from "firebase-admin";
import {
	deleteObject, ref as storeRef, uploadBytes, getDownloadURL, connectStorageEmulator
} from "firebase/storage";
import * as fs from "fs";
import { auth, storage } from "../firebase/firebaseConfig";
import {
	connectAuthEmulator,
	createUserWithEmailAndPassword
} from "firebase/auth";
import {FirebaseError} from "../contexts/AuthContext.types";
//import { toArrayBuffer } from "../utils/testHelper";

//const MY_PROJECT_ID = process.env.REACT_APP_FIREBASE_API_KEY;
const MY_PROJECT_ID = "demo-users-storage-rules-test";

const testUser = { email: "user123@test.com", password: "123456",};

let testEnv: ftest.RulesTestEnvironment;

const loadIconImage = fs.readFileSync("src/firebase/_mock/test-image.jpeg");

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
				connectStorageEmulator(
					storage,
					"localhost",
					9199
				);
				try {
					const userAuth = await createUserWithEmailAndPassword(
						auth,
						testUser.email,
						testUser.password
					);
					const userUid = userAuth.user.uid;

					const path = `images/${userUid}/test-image.jpeg`;
					const alice = testEnv.authenticatedContext(userUid);

					const fileRef = storeRef(
						alice.storage(),
						path
					);
					//console.log(typeof loadIconImage)

					const snapshot = await uploadBytes(
						fileRef,
						loadIconImage
					);

					await assertSucceeds(getDownloadURL(snapshot.ref));

				} catch (error) {
					throw new Error((error as FirebaseError).code);
				}
				await testEnv.cleanup();
			}
		);
	}
);
