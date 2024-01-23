import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SuperAdmin from './component/SuperAdmin';
import Counter from './component/pages/Counter';
export default function App() {
  
  return (
    <>
     <Routes>
      <Route path='/' element={<SuperAdmin/>}/>
      <Route path='n' element={<Counter/>}/>
     </Routes>
    </>
  )
}