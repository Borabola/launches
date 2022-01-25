import * as ftest from "@firebase/rules-unit-testing";
import {
	assertFails, assertSucceeds, initializeTestEnvironment
} from "@firebase/rules-unit-testing";
import {
	deleteObject, getDownloadURL, ref as storeRef, uploadBytesResumable
} from "firebase/storage";
import * as fs from "fs";

const MY_PROJECT_ID = process.env.REACT_APP_FIREBASE_API_KEY;
const userAuth = { email: "user123@test.com", userId: "user123", };

let testEnv: ftest.RulesTestEnvironment;

const loadIconImage = () => fs.readFileSync("./icon.png");
beforeAll(async () => {
	testEnv = await ftest.initializeTestEnvironment({
		projectId: "demo-users-storage-rules-test",
		storage: {
			rules: fs.readFileSync(
				"./storage.rules",
				"utf8"
			),
		},
	});
});

beforeEach(async () => {
	await testEnv.clearStorage();
	return;
});

afterAll(async () => {
	console.log(testEnv);
	await testEnv.cleanup();
	console.log(testEnv);
	return;
});

describe(
	"Firestore security rules",
	() => {

		/*beforeEach(async () => {
			await testEnv.clearStorage();
			return;
		});

		afterAll(async () => {
			//await testEnv.cleanup();
			return;
		});*/

		it(
			"cannot read from storage .unauthenticatedContext",
			async () => {
				const testEnv = await initializeTestEnvironment({
					projectId: MY_PROJECT_ID,
					storage: {
						rules: fs.readFileSync(
							"storage.rules",
							"utf8"
						),
					},
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
			"cannot read from storage",
			async () => {
				const testEnv = await initializeTestEnvironment({
					projectId: MY_PROJECT_ID,
					storage: {
						rules: fs.readFileSync(
							"storage.rules",
							"utf8"
						),
					},
				});

				const alice = testEnv.authenticatedContext(
					"alice",
					userAuth
				);
				//const createTestFile = (size: number) => Buffer.alloc(size);
				const desertRef = storeRef(
					alice.storage(),
					"images/desert.jpg"
				);
				await uploadBytesResumable(
					desertRef,
					loadIconImage
				);
				await assertSucceeds(getDownloadURL(desertRef));

				/*await assertFails(storeRef.put(
					createTestFile(500 * 1024 * 1024),
					{ contentType: "image/png" }
				).then());*/
			}
		);
	}
);
