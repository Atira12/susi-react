import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { AuthProvider } from "./core/auth-provider.component.tsx/app-structure.component";
import { routes } from "./core/route/routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>,
);
