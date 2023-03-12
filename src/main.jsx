import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import Start from "./pages/Start";
import Result from "./pages/Result";
import Quiz from "./pages/Quiz";
import Admin from "./pages/Admin";
import "./index.css";

window.store = store

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/result",
    element: <Result />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider >
);
