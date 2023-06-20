import React from "react";
import { JournalPage } from "../pages/JournalPage";
import { Navigate, Route, Routes } from "react-router-dom";

export const JournalRouter = () => {
  console.log('journal router')
  return (
    <Routes>
      <Route path={"/"} element={<JournalPage />} />

      <Route path={"/*"} element={<Navigate to={"/"} />} />
    </Routes>
  );
};