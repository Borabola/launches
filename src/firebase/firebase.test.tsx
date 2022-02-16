import * as ftest from "@firebase/rules-unit-testing";
import { assertFails, assertSucceeds } from "@firebase/rules-unit-testing";
import {
	deleteObject, ref as storeRef, uploadBytes
} from "firebase/storage";
import * as fs from "fs";
import { toArrayBuffer } from "../utils/testHelper";

//const MY_PROJECT_ID = process.env.REACT_APP_FIREBASE_API_KEY;

const userAuth = { email: "user123@test.com", userId: "user123", };

let testEnv: ftest.RulesTestEnvironment;

const loadIconImage = fs.readFileSync("src/firebase/_mock/test-image.jpeg");

beforeAll(async () => {
	testEnv = await ftest.initializeTestEnvironment({
		projectId: "demo-users-storage-rules-test",
		//projectId: MY_PROJECT_ID,
		storage: {
			rules: fs.readFileSync(
				"./storage.rules",
				"utf8"
			),
		}
	});
});

beforeEach(async () => {
	jest.setTimeout(80000);
	await testEnv.clearStorage();
	return;
});

afterAll(async () => {
	await testEnv.cleanup();
	return;
});

describe(
	"Firestore security rules",
	() => {
		it(
			"cannot read from storage .unauthenticatedContext",
			async () => {
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
				const alice = testEnv.authenticatedContext(
					"alice",
					userAuth
				);

				const path = `images/${userAuth.userId}/logo192.png`;
				const storageRef = storeRef(
					alice.storage(),
					path
				);

				await assertSucceeds(uploadBytes(
					storageRef,
					toArrayBuffer(loadIconImage)
				)
					.then((snapshot) => {
						console.log(snapshot);
						console.log("Uploaded a blob or file!");
					})
					.catch((error) => {
						console.error(error);
					}));
			}
		);
	}
);
