import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../core/auth-provider.component.tsx/app-structure.component";
import { RoutePaths } from "../core/route/route-paths.enum";

export const MainPageComponent: React.FC = () => {
  const { isAuth } = useAuth();
  const redirect = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      redirect(RoutePaths.Login);
    }
  });
  return <></>;
};
