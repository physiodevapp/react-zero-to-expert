import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

function HomePage() {

  const {user} = useContext(UserContext)

  return (
    <>
      <h1>HomePage {user?.name}</h1>
      <hr/>

      <pre>
        {
          JSON.stringify(user, null, 3)
        }
      </pre>
    </>
  );
}

export { HomePage };
