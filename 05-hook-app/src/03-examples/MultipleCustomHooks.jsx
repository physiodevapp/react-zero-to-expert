import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";

function MultipleCustomHooks() {
  const [quoteCounter, setQuoteCounter] = useState(1)
  const { data, isLoading, errors } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${quoteCounter}`
  );

  const { author, quote } = !!data && data[0];

  const handleClick = () => {
    setQuoteCounter(() => quoteCounter + 1)
  }

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      { isLoading ? (
          <div className="alert alert-info text-center">
            Loading...
          </div>
        ) : (
          <blockquote className="blockquote text-end">
            <p className="mb-1">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
        ) 
      }

      <button 
        onClick={handleClick} 
        disabled={isLoading}
        className="btn btn-primary"
      >
        Next
      </button>
    </>
  );
}

export default MultipleCustomHooks;
