import { render } from "@testing-library/react";
// Import firebase from your firebase init script:
import { app } from "./firebaseConfig";
import { getDatabase } from "firebase/database";
import  { getStorage, ref } from "firebase/storage";
import {
	apps,
	initializeTestApp, assertFails,assertSucceeds, clearFireStoreData} from "@firebase/rules-unit-testing"

const MY_PROJECT_ID = process.env.REACT_APP_FIREBASE_API_KEY;
const userAuth = { uid: "user123", email: "user123@test.com" };

const getFireStore = (authUser) => getStorage(initializeTestApp({ projectId: MY_PROJECT_ID }))


describe(
	"Firestore security rules",
	() => {
		beforeEach(async() => {
			await clearFireStoreData({projectId: MY_PROJECT_ID})
		});
		/*afterEach(() => {
			jest.restoreAllMocks();
		  });*/

		it(
			"cannot read from collection",
			() => {
				const db = getFireStore(userAuth);
				const testDoc = db.collection
				const storage = getStorage(firebase.initializeTestApp({ projectId: MY_PROJECT_ID }))
				const imagesRef = ref(storage, 'images');
				const testDoc = db.collection("readonly").doc"testDoc2");
				await firebase.assertFails(testDoc.set({ foo: "bar" }));
			}
		);
	}
);
