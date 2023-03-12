import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import "./index.css";
import App from "./App";

window.store = store

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App/>
  </Provider >
);
