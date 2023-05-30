import { useState } from 'react'
import './App.css'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom';
import Workoutspage from './workoutspage';
import Homepage from './Homepage';

function App() {
 
  return (
    <>
    <Routes>
    <Route path='/' element={<Layout />}>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='workouts' element={<Workoutspage/>}></Route>
          </Route>
    </Routes>
    </>
  )
}

export default App
