import { createContext, Dispatch, useContext, useState } from "react";

export interface SusiAuthInterface {
  isAuth: boolean;
  username?: string;
  setIsAuth: Dispatch<boolean>;
  setUsername: Dispatch<string | undefined>;
}
export const SusiAuthContext = createContext<SusiAuthInterface | undefined>(
  undefined,
);

export interface AuthProviderPropsInterface {
  children: React.ReactNode;
}
export const AuthProvider: React.FC<AuthProviderPropsInterface> = (
  props: AuthProviderPropsInterface,
) => {
  const { children } = props;
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [username, setUsername] = useState<string | undefined>(undefined);

  return (
    <SusiAuthContext.Provider
      value={{ isAuth, username, setIsAuth, setUsername }}
    >
      {children}
    </SusiAuthContext.Provider>
  );
};

export const useAuth = () => {
  const { ...rest } = useContext(SusiAuthContext);
  return { ...rest };
};
