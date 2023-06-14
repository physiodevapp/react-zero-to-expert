import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { heroId } = useParams();
  const hero = getHeroById(heroId);
  console.log(hero)
  if (!hero) {
    return <Navigate to={"/"}></Navigate>
  }

  return (
    <>
      <h1>{hero.superhero}</h1>
    </>
  );
};
