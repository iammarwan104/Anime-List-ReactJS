import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage, { loader as loaderHomePage } from "./routes/home-page/HomePage";
import Kopi from "./routes/Kopi";
import ErrorPage from "./error-page";
import SeeAllAnime from "./see-all-anime/SeeAllAnime";
import SearchAnime from "./search-anime/SearchAnime";
import DetailAnime, { loader as detailAnimeLoader} from "./detail-anime/DetailAnime";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader : loaderHomePage
      },
      {
        path: "/Kopi",
        element: <Kopi />,
      },
      {
        path: "/Top-Anime",
        element: <SeeAllAnime />,
      },
      {
        path: "/Search-Anime/:name",
        element: <SearchAnime />,
      },
      {
        path: "/Search-Anime",
        element: <SearchAnime />,
      },
      {
        path: "/Detail-Anime/:malId",
        element: <DetailAnime />,
        loader : detailAnimeLoader
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
