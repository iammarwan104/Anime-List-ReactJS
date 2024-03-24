import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/home-page/HomePage";
import Kopi from "./routes/Kopi";
import ErrorPage from "./error-page";
import SeeAllAnime from "./see-all-anime/SeeAllAnime";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Kopi",
        element: <Kopi />,
      },
      {
        path: "/Top-Anime",
        element: <SeeAllAnime />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
