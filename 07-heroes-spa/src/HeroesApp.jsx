import React from "react";
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./heroes/context";

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
