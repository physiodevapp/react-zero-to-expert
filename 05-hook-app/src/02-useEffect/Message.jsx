import React, { useEffect, useState } from "react";

function Message() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // console.log('message mounted!')

    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      // console.log('message unmounted!')

      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h4 className="mt-2">User already exists</h4>
      <div>{JSON.stringify(coords)}</div>
    </>
  );
}

export default Message;
