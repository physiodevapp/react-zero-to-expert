import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PrivateRouter } from "./PrivateRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={
          <PrivateRouter>
            <HeroesRoutes />
          </PrivateRouter>
        }/>
      </Routes>
    </>
  );
};
