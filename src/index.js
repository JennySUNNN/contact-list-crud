import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { Error } from "./Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { contactLoader, allContactsLoader } from "./service/loader";

import AddContactForm from "./componenets/AddContactForm";
import EditContactForm from "./componenets/EditContactForm";

import { editAction } from "./componenets/EditContactForm";

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
    path: "/:id/edit",
    element: <EditContactForm />,
    loader: contactLoader,
    action: editAction,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
