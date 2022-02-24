// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { server } from "./mock/server";

beforeEach(() => {
	// IntersectionObserver isn't available in test environment
	const mockIntersectionObserver = jest.fn();
	mockIntersectionObserver.mockReturnValue({
		observe: () => null,
		unobserve: () => null,
		disconnect: () => null
	});
	window.IntersectionObserver = mockIntersectionObserver;
});

beforeAll(() => server.listen());

afterEach(() => {
	server.resetHandlers();

	// This is the solution to clear RTK Query cache after each test
	//store.dispatch(spacelaunchesSlice.util.resetApiState());
});

afterAll(() => server.close());
