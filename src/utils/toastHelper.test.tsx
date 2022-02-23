import {
	screen, render, fireEvent, waitFor
} from "@testing-library/react";
import { showAddProductSuccessToast } from "./toastHelper";
import { FC } from "react";
import { ToastContainer } from "react-toastify";
import AppIntlProvider from "../hocs/AppIntlProvider";

const FakeComponent: FC = () => {
	const showToast = () => showAddProductSuccessToast();

	return (
		<AppIntlProvider>
			<button onClick={showToast}>Test button</button>
		<ToastContainer
			position="bottom-right"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
		/>
		</AppIntlProvider>
	);
};
describe(
	"function showAddProductSuccessToast:",
	() => {
		it(
			"show toast with correct info",
			async () => {
				render(<FakeComponent />);
				const button = screen.getByText("Test button");
				fireEvent.click(button);

				await waitFor(() => {
					expect(screen.getByText(/Adding the product is successful/i))
						.toBeInTheDocument();
				});
			}
		);

	}
);
