import React, { useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

export const Quote = ({ quote, author }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });

    return () => {};
  }, []);

  return (
    <>
      <blockquote className="blockquote text-end">
        <p ref={pRef} className="mb-1">{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <div>{JSON.stringify(boxSize)}</div>
    </>
  )
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

// export { Quote };
