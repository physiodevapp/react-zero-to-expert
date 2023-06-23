import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRouter } from '../auth/routes/AuthRouter'
import { JournalRouter } from '../journal/router/JournalRouter'
import { CheckingAuth } from '../ui'
import { useCheckAuth } from '../hooks'

export const AppRouter = () => {

  const { status } = useCheckAuth()

  if (status === 'checking') {
    return <CheckingAuth/>
  }

  return (
    <Routes>

      {
        (status === 'authenticated')
        ? <Route path={'/*'} element={<JournalRouter/>}/> // JournalApp
        : <Route path={'/auth/*'} element={<AuthRouter/>}/> // Login & register
      }
      
      <Route path='/*' element={<Navigate to='/auth/login'/>}/>

    </Routes>
  )
}
