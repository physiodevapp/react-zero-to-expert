import React, { useState } from "react";
import { useFetch, useCounter } from "../hooks";
import LoadingQuote from "./LoadingQuote";
import Quote from "./Quote";

function MultipleCustomHooks() {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, errors } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];
  // console.log("MultipleCustomHooks ", counter);

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}

      <button
        onClick={() => increment()}
        disabled={isLoading}
        className="btn btn-primary"
      >
        Next
      </button>
    </>
  );
}

export default MultipleCustomHooks;
