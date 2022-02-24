import {
	screen, render, fireEvent, waitFor
} from "@testing-library/react";
import {
	showToast,
	showAddProductSuccessToast,
	showUploadFailToast,
	showAddProductFailToast,
	showServerDetail,
	outputtingError,
	outputtingGoogleError
} from "./toastHelper";
import { FC } from "react";
import { ToastContainer } from "react-toastify";
import AppIntlProvider from "../hocs/AppIntlProvider";
import { IntlShape } from "react-intl";
import { useIntl } from "react-intl";
import { renderforRTKtest } from "./testHelper";

type callbackType = {
	error?: string,
	onClickToast: (error?: string) => void,
};

type callbackWithIntlType = {
	error?: string,
	onClickToast: (error?: string, intl?: IntlShape) => void,
};

const FakeComponent: FC<callbackType> = ({error, onClickToast}) => {
	//const showToast = () => showAddProductSuccessToast();
	const showToast = () => onClickToast(error);

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

const FakeComponentForProvider: FC<callbackWithIntlType> = ({error, onClickToast}) => {
	//const showToast = () => showAddProductSuccessToast();
	const intl = useIntl();
	const showToast = () => onClickToast(
		error,
		intl
	);

	return (
		<>
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
		</>
	);
};
describe(
	"function showToast:",
	() => {
		it(
			"show toast with correct info",
			async () => {
				render(<FakeComponent onClickToast={showToast}/>);
				const button = screen.getByText("Test button");
				fireEvent.click(button);

				await waitFor(() => {
					expect(screen.getByText(/Server Error/i))
						.toBeInTheDocument();
				});
			}
		);
	}
);

describe(
	"function showAddProductSuccessToast:",
	() => {
		it(
			"show toast with correct info",
			async () => {
				render(<FakeComponent onClickToast={showAddProductSuccessToast}/>);
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

describe(
	"function showUploadFailToast:",
	() => {
		it(
			"show toast with correct info",
			async () => {
				render(<FakeComponent onClickToast={showUploadFailToast}/>);
				const button = screen.getByText("Test button");
				fireEvent.click(button);

				await waitFor(() => {
					expect(screen.getByText(/Uploading of image is failed/i))
						.toBeInTheDocument();
				});
			}
		);
	}
);

describe(
	"function showAddProductFailToast:",
	() => {
		it(
			"show toast with correct info",
			async () => {
				render(<FakeComponent onClickToast={showAddProductFailToast}/>);
				const button = screen.getByText("Test button");
				fireEvent.click(button);

				await waitFor(() => {
					expect(screen.getByText(/Adding the product is failed/i))
						.toBeInTheDocument();
				});
			}
		);
	}
);

describe(
	"function showServerDetail:",
	() => {
		it(
			"show toast with correct info",
			async () => {
				render(<FakeComponent
					error={"test error"}
					onClickToast={showServerDetail}
				/>);
				const button = screen.getByText("Test button");
				fireEvent.click(button);

				await waitFor(() => {
					expect(screen.getByText(/test error/i))
						.toBeInTheDocument();
				});
			}
		);
	}
);

describe(
	"function outputtingError:",
	() => {
		it(
			"default case: show toast with correct info",
			async () => {
				renderforRTKtest(<FakeComponentForProvider
					error={"test error"}
					onClickToast={outputtingError}
				/>);
				const button = screen.getByText("Test button");
				fireEvent.click(button);

				await waitFor(() => {
					expect(screen.getByText(/Error in login/i))
						.toBeInTheDocument();
				});
			}
		);
		it(
			"auth/user-not-found case: show toast with correct info",
			async () => {
				renderforRTKtest(<FakeComponentForProvider
					error={"auth/user-not-found"}
					onClickToast={outputtingError}
				/>);
				const button = screen.getByText("Test button");
				fireEvent.click(button);

				await waitFor(() => {
					expect(screen.getByText(/User not found/i))
						.toBeInTheDocument();
				});
			}
		);

		it(
			"auth/email-already-exists case: show toast with correct info",
			async () => {
				renderforRTKtest(<FakeComponentForProvider
					error={"auth/email-already-exists"}
					onClickToast={outputtingError}
				/>);
				const button = screen.getByText("Test button");
				fireEvent.click(button);

				await waitFor(() => {
					expect(screen.getByText(/Email already exis/i))
						.toBeInTheDocument();
				});
			}
		);

		it(
			"auth/email-already-in-use case: show toast with correct info",
			async () => {
				renderforRTKtest(<FakeComponentForProvider
					error={"auth/email-already-in-use"}
					onClickToast={outputtingError}
				/>);
				const button = screen.getByText("Test button");
				fireEvent.click(button);

				await waitFor(() => {
					expect(screen.getByText(/Email already in use/i))
						.toBeInTheDocument();
				});
			}
		);

		it(
			"auth/wrong-password case: show toast with correct info",
			async () => {
				renderforRTKtest(<FakeComponentForProvider
					error={"auth/wrong-password"}
					onClickToast={outputtingError}
				/>);
				const button = screen.getByText("Test button");
				fireEvent.click(button);

				await waitFor(() => {
					expect(screen.getByText(/Invalid password/i))
						.toBeInTheDocument();
				});
			}
		);

		it(
			"auth/too-many-requests case: show toast with correct info",
			async () => {
				renderforRTKtest(<FakeComponentForProvider
					error={"auth/too-many-requests"}
					onClickToast={outputtingError}
				/>);
				const button = screen.getByText("Test button");
				fireEvent.click(button);

				await waitFor(() => {
					expect(screen.getByText(/Too many request/i))
						.toBeInTheDocument();
				});
			}
		);

		it(
			"400 case: show toast with correct info",
			async () => {
				renderforRTKtest(<FakeComponentForProvider
					error={"400"}
					onClickToast={outputtingError}
				/>);
				const button = screen.getByText("Test button");
				fireEvent.click(button);

				await waitFor(() => {
					expect(screen.getByText(/Email already exist/i))
						.toBeInTheDocument();
				});
			}
		);
	}
);

describe(
	"function outputtingGoogleError:",
	() => {
		it(
			"default case: show toast with correct info",
			async () => {
				renderforRTKtest(<FakeComponentForProvider
					error={"test error"}
					onClickToast={outputtingGoogleError}
				/>);
				const button = screen.getByText("Test button");
				fireEvent.click(button);

				await waitFor(() => {
					expect(screen.getByText(/Error in login with Google acc/i))
						.toBeInTheDocument();
				});
			}
		);
		it(
			"auth/user-not-found case: show toast with correct info",
			async () => {
				renderforRTKtest(<FakeComponentForProvider
					error={"auth/user-not-found"}
					onClickToast={outputtingGoogleError}
				/>);
				const button = screen.getByText("Test button");
				fireEvent.click(button);

				await waitFor(() => {
					expect(screen.getByText(/User not found/i))
						.toBeInTheDocument();
				});
			}
		);
	}
);
