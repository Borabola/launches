import { initializeTestEnvironment } from "@firebase/rules-unit-testing";
import {
	connectDatabaseEmulator, ref, set
} from "firebase/database";
import * as fs from "fs";
import useProducts from ".";
import { database } from "../../firebase/firebaseConfig";

/** @type testing.RulesTestEnvironment */
//let testEnv: ftest.RulesTestEnvironment;
//const MY_PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const MY_PROJECT_ID = "test-project";
const testUserId = "25D0X5AggMQ6CS0n7RWFayCP04T2";

const testEnv = initializeTestEnvironment({
	projectId: MY_PROJECT_ID,
	database: {
		rules: fs.readFileSync(
			"database.rules.json",
			"utf8"
		)
	},
});

//const db = getDatabase();

if (location.hostname === "localhost") {
	// Point to the RTDB emulator running on localhost.
	connectDatabaseEmulator(
		database,
		"localhost",
		9000
	);
}

beforeEach(async () => {
	jest.setTimeout(60000);
	//add test data
});

afterEach(async () => {
	(await testEnv).cleanup();
	//await testEnv.cleanup();
	//
	set(
		ref(database),
		null
	);

});

beforeEach(async () => {
	(await testEnv).clearDatabase();
});

describe(
	"Public profiles",
	() => {
		it(
			"should allow anyone to read any profile",
			() => {
				// Setup: Create ref for testing (bypassing Security Rules)
				/*testEnv.withSecurityRulesDisabled(async context => {
				  await context.database().ref('users/foobar').set({ foo: 'bar' });
				});
				// Setup: Create Rules Test Context
				const unauthedDb = testEnv.unauthenticatedContext().database();
				// Then test our security rules by trying to read it using the client SDK.
				await assertSucceeds(get(ref(unauthedDb, 'users/foobar')));*/

				const products = useProducts(
					testUserId,
					database
				);
				console.log(products);
			}
		);
	}
);
