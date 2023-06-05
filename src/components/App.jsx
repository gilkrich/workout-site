import { useState, useEffect } from 'react'
import './App.css'
import Layout from './Layout'
import { Route, Routes } from 'react-router-dom';
import Workoutspage from './Workoutspage';
import Homepage from './Homepage';
import { data } from './workouts.json'
import { Context } from './Context';
import Calendar1 from './Calendar';
import Workoutplanpage from './Workoutplanpage';
import Userpage from './Userpage';
import Loginpage from './Loginpage';
import Signuppage from './Signuppage';
import Notfound from './Notfound';
import { useContext } from 'react';
function App() {
  const [isloggedout, setloggedout] = useState(false)
  const [workoutData, setWorkoutData] = useState();
  const { numbercontext } = useContext(Context);
  console.log(numbercontext);
  const [workoutfakeData, setWorkoutfakeData] = useState();
  useEffect(() => {
    setWorkoutData(data && data?.manworkout);
    setWorkoutfakeData(data && data?.manworkout);
    console.log("mounted")
  }, [])
  return (
    <>
      <div style={{ maxWidth: "100vw" }}>
        <Context.Provider value={{ numbercontext }}>
          <Routes>
            <Route path='/' element={<Layout isloggedout={isloggedout} setloggedout={setloggedout} />}>
              <Route path='/' element={<Homepage workoutData={workoutData} />}></Route>
              <Route path='workouts' element={<Workoutspage workoutData={workoutData} setWorkoutData={setWorkoutData} workoutfakeData={workoutfakeData} />}></Route>
              <Route path='calendar' element={<Calendar1 workoutData={workoutData} setWorkoutData={setWorkoutData} />}></Route>
              <Route path='*' element={<Notfound />}></Route>
              <Route path='workouts/:name' element={< Workoutplanpage workoutData={workoutData} setWorkoutData={setWorkoutData} />}></Route>
              <Route path='calendar/:name' element={< Workoutplanpage workoutData={workoutData} setWorkoutData={setWorkoutData} />}></Route>
              <Route path='user' element={<Userpage />}>
                <Route path='' element={<Loginpage isloggedout={isloggedout} setloggedout={setloggedout} />}></Route>
                <Route path='Signup' element={<Signuppage isloggedout={isloggedout} setloggedout={setloggedout} />}></Route>
              </Route>
            </Route>
          </Routes>
        </Context.Provider>
      </div >
    </>
  )
}

export default App
