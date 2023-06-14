import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { MarvelPage } from '../heroes/pages/MarvelPAge'
import { DcPage } from '../heroes/pages/DcPage'
import { LoginPage } from '../auth/pages/LoginPage'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='marvel' element={<MarvelPage/>}/>
        <Route path='dc' element={<DcPage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='/' element={<Navigate to={'/marvel'}/>}/>
      </Routes>
    </>
  )
}
