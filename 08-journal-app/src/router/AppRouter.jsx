import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRouter } from '../auth/routes/AuthRouter'
import { JournalRouter } from '../journal/router/JournalRouter'

export const AppRouter = () => {
  console.log('app router')
  return (
    <Routes>
      {/* Login & register */}
      <Route path={'/auth/*'} element={<AuthRouter/>}/>

      {/* JournalApp */}
      <Route path={'/*'} element={<JournalRouter/>}/>

    </Routes>
  )
}
