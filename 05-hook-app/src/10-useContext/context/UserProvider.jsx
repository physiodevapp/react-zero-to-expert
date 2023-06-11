import React, { useState } from 'react'
import { UserContext } from './UserContext'

function UserProvider({children}) {

  // const user = {
  //   id: 123,
  //   name: 'physiodevapp',
  //   email: 'physiodevapp@example.org', 
  // }

  const [user, setUser] = useState()

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export {
  UserProvider
}