import { useState,useEffect } from 'react'
import './App.css'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom';
import Workoutspage from './Workoutspage';
import Homepage from './Homepage';
import {data} from './workouts.json'
import WorkoutCard from './WorkoutCard';
function App() {
 const [workoutData,setWorkoutData] =useState();
 useEffect(()=>{
   setWorkoutData(data?.manworkout);
 },[])
  return (
    <>
    <div style={{maxWidth:"100vw"}}>
    <Routes>
    <Route path='/' element={<Layout />}>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='workouts' element={<Workoutspage workoutData={workoutData} setWorkoutData={setWorkoutData}/>}></Route>
          </Route>
    </Routes>
    </div>
    </>
  )
}

export default App
