import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { LoginPage } from "../auth/";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./Publicrouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRouter>
              <LoginPage />
            </PublicRouter>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRouter>
              <HeroesRoutes />
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
};
