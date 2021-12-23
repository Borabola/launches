import { FC } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import AppIntlProvider from "hocs/AppIntlProvider";
import { AuthProvider } from "contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "theme";
import { Loader } from "components/common/Loader";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import { EventsSwiper } from "components/main/EventsSwiper";
import { useGetEventsQuery } from "../services/api";


const App: FC = () => {

	const { data = [], isFetching } = useGetEventsQuery();

	return (
	


	<Provider store={store}>

	{data}
							
					 
	</Provider>
	);
};

export default App;
