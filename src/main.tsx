import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Home from "./routes/Home/Home";

// Router config
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DisplayCardDetails from "./routes/CardDetails/DisplayCardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      /* Nested routes */
      {
        path: "/ofertas/:id",
        element: <DisplayCardDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
