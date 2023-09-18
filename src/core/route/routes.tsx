import { createBrowserRouter } from "react-router-dom";
import { LoginPageComponent } from "../../pages/login/login.component";
import { RoutePaths } from "./route-paths.enum";

export const routes = createBrowserRouter([
  {
    path: RoutePaths.Login,
    element: <LoginPageComponent />,
  },
  {
    path: RoutePaths.Root,
    element: <LoginPageComponent />,
  },
]);
