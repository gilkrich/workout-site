import { useState,useEffect } from 'react'
import './App.css'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom';
import Workoutspage from './Workoutspage';
import Homepage from './Homepage';
import {data} from './workouts.json'
import WorkoutCard from './WorkoutCard';
import Workoutplanpage from './Workoutplanpage';
function App() {
 const [workoutData,setWorkoutData] =useState();
 useEffect(()=>{
   setWorkoutData(data&&data?.manworkout);
   console.log("mounted")
  },[])

  return (
    <>
    <div style={{maxWidth:"100vw"}}>
    <Routes>
    <Route path='/' element={<Layout />}>
          <Route path='/' element={<Homepage workoutData={workoutData}/>}></Route>
          <Route path='workouts' element={<Workoutspage workoutData={workoutData} setWorkoutData={setWorkoutData}/>}></Route>
          <Route path='workouts/:name' element={< Workoutplanpage workoutData={workoutData} setWorkoutData={setWorkoutData}/>}></Route>
          </Route>
    </Routes>
    </div>
    </>
  )
}

export default App
