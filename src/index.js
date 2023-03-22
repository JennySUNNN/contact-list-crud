import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AddContact from "./routes/AddContact";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "./Error";
// BrowserRouter

import { loader } from "./componenets/ContactList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    loader: loader,
    children: [
      {
        path: "",
      },
    ],
  },
  {
    path: "/new",
    element: <AddContact />,
    errorElement: <Error />,
    // loader: loader,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
