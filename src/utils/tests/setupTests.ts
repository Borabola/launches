// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
//import store from "../../App/App";
import { server } from "./mockServer"; // set up msw server
//import { spacelaunchesSlice } from "../../redux/services/api";

beforeAll(() => server.listen());

afterEach(() => {
	server.resetHandlers();

    // This is the solution to clear RTK Query cache after each test
    //store.dispatch(spacelaunchesSlice.util.resetApiState());
});

afterAll(() => server.close());
