import * as ftest from "@firebase/rules-unit-testing";
import { assertFails, assertSucceeds } from "@firebase/rules-unit-testing";
import { storage } from "firebase-admin";
import {
	deleteObject, ref as storeRef, uploadBytes, getDownloadURL
} from "firebase/storage";
import * as fs from "fs";
import { toArrayBuffer } from "../utils/testHelper";

const MY_PROJECT_ID = process.env.REACT_APP_FIREBASE_API_KEY;

const userAuth = { email: "user123@test.com", userId: "L1iznAixGpNeb16AmPTSdCSx6Ss1", };

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
		/*it(
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
		);*/

		it(
			"can read from storage with auth",
			async () => {
				const alice = testEnv.authenticatedContext(
					"alice",
					userAuth
				);

				const path = `images/${userAuth.userId}/test-image.jpeg`;
				const storageRef = storeRef(
					alice.storage(),
					path
				);

				await assertSucceeds(uploadBytes(
					storageRef,
					toArrayBuffer(loadIconImage)
				)
					.then((snapshot) => {
						return getDownloadURL(snapshot.ref);
						console.log(snapshot);
						console.log("Uploaded a blob or file!");
					})
					.catch((error) => {
						console.error(error);
						throw new Error("");
					}));

				expect(storageRef.fullPath)
					.toBe(`http://localhost:4000/
					storage/default-bucket/images/${userAuth.userId}/test-image.jpeg`);
			}
		);
	}
);
