import {FC} from "react";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "./App.scss";

const App: FC = () => {

	return (
		<BrowserRouter>	
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
		</BrowserRouter>		
	);
};

export default App;
