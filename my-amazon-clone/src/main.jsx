import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import {
	StateProvider,
	reducer,
	intialState,
} from "./components/StateProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<StateProvider intialState={intialState} reducer={reducer}>
			<App />
		</StateProvider>
	</BrowserRouter>
);
