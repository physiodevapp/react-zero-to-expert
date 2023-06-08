import React from "react";
import { useFetch, useCounter } from "../hooks";
import { Quote, LoadingQuote } from '../03-examples';

function Layout() {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, errors } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

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

export default Layout;
