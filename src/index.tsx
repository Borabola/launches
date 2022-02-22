import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import "./index.css";
//import { worker } from "./mock/browser";
//import { isDevelopment } from "./utils/helper";

//for dev with mock server data
/*if (isDevelopment()) {
	worker.start();
}*/

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById("root")
);
