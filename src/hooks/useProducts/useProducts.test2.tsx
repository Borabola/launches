export { };
/*import * as ftest from "@firebase/rules-unit-testing";
import {
	connectDatabaseEmulator, Database, ref, set
} from "firebase/database";
import * as fs from "fs";
import { ReactElement } from "react";
import { renderWithProvidersLogin } from "utils/testHelper";
import useProducts from ".";
//import { database } from "../../firebase/firebaseConfig";

//let testEnv: ftest.RulesTestEnvironment;
//const MY_PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const MY_PROJECT_ID = "test-project";
//const testUserId = "25D0X5AggMQ6CS0n7RWFayCP04T2";
const userAuth = { email: "user123@test.com", userId: "25D0X5AggMQ6CS0n7RWFayCP04T2", };

let testEnv: ftest.RulesTestEnvironment;
let database: Database;

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

	const alice = testEnv.authenticatedContext(
		"alice",
		userAuth
	);
	database = alice.database("http://localhost:4000/database/launches-db-test/data/");

	if (location.hostname === "localhost") {
		// Point to the RTDB emulator running on localhost.
		connectDatabaseEmulator(
			database,
			"localhost",
			9000
		);
	} else {
		return;
	}
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

beforeEach(async () => {
	jest.setTimeout(60000);
	//add test data
});

afterEach(async () => {
	await testEnv.cleanup();
	//await testEnv.cleanup();
	//
	set(
		ref(database),
		null
	);

});

beforeEach(async () => {
	await testEnv.clearDatabase();
});

describe(
	"Public profiles",
	() => {
		it(
			"should allow anyone to read any profile",
			async () => {
				// Setup: Create ref for testing (bypassing Security Rules)

				const testComponent: ReactElement = () => {
					const products = useProducts(
						userAuth.userId,
						database
					);
					console.log(products);
					return (
						<h1>
							{JSON.stringify(products)}
						</h1>
					);
				};
				renderWithProvidersLogin(testComponent);

			}
		);
	}
);*/
