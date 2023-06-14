import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MarvelPage, DcPage, SearchPage, HeroPage } from "../pages";
import { Navbar } from "../../ui";

export const HeoresRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="search" element={<SearchPage/>}/>
          <Route path="/hero" element={<HeroPage/>}/>
          <Route path="/" element={<Navigate to={"/marvel"} />} />
        </Routes>
      </div>
    </>
  );
};
