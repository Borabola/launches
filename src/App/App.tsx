import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import AppIntlProvider from "hocs/AppIntlProvider";
import { AuthProvider } from "contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "theme";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

const App: FC = () => {

	return (
		<BrowserRouter>
			<AppIntlProvider>
				<AuthProvider>
					<ThemeProvider theme={theme}>
						<CssBaseline />
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
					</ThemeProvider>
				</AuthProvider>
			</AppIntlProvider>
		</BrowserRouter>
	);
};

export default App;
