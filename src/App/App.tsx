import { FC } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import AppIntlProvider from "../hocs/AppIntlProvider";
import { AuthProvider } from "../contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { Loader } from "../components/common/Loader";
import Routes from "../routes";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

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
