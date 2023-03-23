import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { Error } from "./Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { contactLoader, allContactsLoader } from "./service/loader";

import AddContactForm from "./componenets/AddContactForm";
import EditContactForm from "./componenets/EditContactForm";

import deleteAction from "./componenets/Delete";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    loader: allContactsLoader,
  },
  {
    path: "/new",
    element: <AddContactForm />,
  },
  {
    path: "/contacts/:id/edit",
    element: <EditContactForm />,
    loader: contactLoader,
  },
  {
    path: "/contacts/:id/delete",
    element: deleteAction,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
