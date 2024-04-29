import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RoutePath } from "./routePath";
import { SearchPage } from "./pages/SearchPage";

export const router = createBrowserRouter([
  {
    errorElement: <NotFoundPage />,
    children: [
      { path: RoutePath.Base, element: <HomePage /> },
      { path: RoutePath.Profile, element: <ProfilePage /> },
      { path: RoutePath.Search, element: <SearchPage /> }
    ]
  },
])