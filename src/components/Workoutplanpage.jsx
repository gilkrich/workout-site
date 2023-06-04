import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import './workoutplan.css'
import { data } from './workouts.json'

const Workoutplanpage = ({ workoutData, setWorkoutData }) => {
  let { name } = useParams();
  const [currentWorkout, setCurrentWorkout] = useState();
  const [currentWorkout2, setCurrentWorkout2] = useState();
  const [currentBmi, setBmi] = useState('to90');
  const [showingBmi, setShowingBmi] = useState();
  const [height, setHeight] = useState(160);
  const [weight, setWeight] = useState(50);


  useEffect(() => {
    setCurrentWorkout(workoutData?.find(obj => obj?.name == name));
  }, [workoutData])

  function Bmicalc(weight, height) {
    let bmi = (weight / Math.pow((height / 100), 2)).toFixed(1);
    setShowingBmi(bmi)
  }
  function changeWork() {
    if (showingBmi < 18.5) {
      setBmi('to70')
    } else if (showingBmi >= 18.5 && showingBmi <= 24.9) {
      setBmi('to90')
    } else if (showingBmi >= 25 && showingBmi <= 29.9) {
      setBmi('to120')
    } else if (showingBmi >= 30) {
      setBmi('to120')
    }
  }

  function changeworkout() {
    if (localStorage.getItem('loggeduser')) {
      let user = JSON.parse(localStorage.getItem('loggeduser'))
      let users = JSON.parse(localStorage.getItem('users')).filter(item => item.email != user.email)
      const newperson = { email: user.email, password: user.password, verify: user.verify, creditnum: user.creditnum, confirmationnum: user.confirmationnum, myworkout: currentWorkout?.name };
      localStorage.setItem('loggeduser', JSON.stringify(newperson))
      users.push(newperson)
      localStorage.setItem('users', JSON.stringify(users))
    }
  }

  return (
    <div className='workoutplan-container'>
      <h1 style={{ marginBottom: '50px', marginTop: '50px' }}>Our workouts</h1>
      <div className='bmi-container'>
        <h1>BMI Calculator</h1>
        <div class="display">
          <p id="result">{showingBmi}</p>
          <p id="category">Normal weight</p>
        </div>
        <div class="row">
          <input type="range" min={30} max={300} value={weight} id="weight" onChange={e => setWeight(e.target.value)} />
          <span id="weight-val">{weight} kg</span>
        </div>
        <div class="row">
          <input type="range" min={100} max={300} value={height} id="height" onChange={e => setHeight(e.target.value)} />
          <span id="height-val">{height} cm</span>
        </div>
        <button onClick={() => Bmicalc(weight, height)} className='caculator'>calculate</button>
        <button onClick={() => changeWork()} className='caculator'>change workout</button>
      </div>
      <div className='workout-base-info'>
        <h1>{currentWorkout?.name}</h1>
        <h1>Level : {currentWorkout?.level}</h1>
        <h1>Best for {currentWorkout?.goal}</h1>
        <h3>Exercises : {currentWorkout?.exercises}</h3>
      </div>

      {/* {localStorage.getItem('loggeduser')&&!JSON.parse(localStorage.getItem('loggeduser')).creditnum&&<div className='show-if-payed'>
        <button className='current-button' onClick={() => changeworkout()}>Make current workout</button>
        <div className='workout-text'>
          {currentWorkout && Object.values(currentWorkout[currentBmi])?.map((item, index) => {
            return (
              <div className=' work-hard'>
                <div className='workout-card'>
                  <h2 className='exercises-name'>{item.name}</h2>
                  <h2>{item.sets} sets</h2>
                  <h2>{item.reps} reps</h2>
                  <h2>weight to use - {item.weight}</h2>
                  <ol className='list'>
                    {item.instructions.split("!").map(
                      item => {
                        return (
                          <li class="list-item"><span>{item}</span></li>
                        )
                      }
                    )}
                  </ol>
                </div>
                <div className='workout-images'>
                  <h1>image</h1>
                </div>
              </div>

            )
          })}
        </div>
      </div>} */}






    </div>
  )
}

export default Workoutplanpage
