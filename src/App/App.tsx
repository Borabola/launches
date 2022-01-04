import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { Loader } from "../components/common/Loader";
import { AuthProvider } from "../contexts/AuthContext";
import AppIntlProvider from "../hocs/AppIntlProvider";
import { persistor, store } from "../redux/store";
import Routes from "../routes";
import theme from "../theme";
import "./App.scss";

const App: FC = () => {

	return (
		<Provider store={store}>
			<PersistGate
				loading={<Loader />}
				persistor={persistor}
			>
				<BrowserRouter>
					<AppIntlProvider>
						<AuthProvider>
							<ThemeProvider theme={theme}>
								<CssBaseline />
								<Routes />
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
			</PersistGate>
		</Provider>
	);
};

export default App;
