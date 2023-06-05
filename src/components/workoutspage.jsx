import React from 'react'
import { Outlet, Link, useParams,useNavigate } from 'react-router-dom'
import WorkoutCard from './WorkoutCard'
import './workoutpage.css'
import { Context } from './Context'
import { useContext } from 'react'
const Workoutspage = ({workoutData,setWorkoutData, workoutfakeData}) => {
    const logd = localStorage.getItem('loggeduser')
    const {numbercontext} = useContext(Context);

    

    function begin(e) {
      setWorkoutData(workoutfakeData.filter(item=>item.level==e))
    }

    function defa() {
      setWorkoutData(workoutfakeData)
    }


  return (
    <div>
      <h1 className='workouts-title'>Power Up Your Fitness: Unleash Your Potential with Dynamic Workouts</h1>
      <div className='level-buttons'>
        <button onClick={()=>defa()} className='level-button' >All</button>
        <button onClick={(e)=>begin(e.target.value)} className='level-button' value='Beginner'>Beginner</button>
        <button onClick={(e)=>begin(e.target.value)} className='level-button' value='Advanced'>Advanced</button>
        <button onClick={(e)=>begin(e.target.value)} className='level-button' value='Intermediate'>Intermediate</button>
      </div>
    <div className='workout-page'>
      {logd&&workoutData?.map((item,index)=>{
        return(
          <WorkoutCard key={index}
          image={item.img}
          name={item.name}
          goal={item.goal} 
          difficulty={item.level}
          exercises={item.exercises}
          equipment={item.equipment}
          number = {numbercontext}
          />
        )
      })}
      {!logd&&<div>
      <div className='workout-page'>
        {
          workoutData?.slice(0,6).map((item,index)=>{
            return(
          <WorkoutCard key={index}
          image={item.img}
            name={item.name}
            goal={item.goal} 
            difficulty={item.level}
            exercises={item.exercises}
            equipment={item.equipment}
            number = {1}
            />
            )
          }
          )
        }
      </div>
      <div className='if-logged'>
        <h2>want to see more sign up a new acoount and see every workout available</h2>
        <Link  to='/user/signup'><button className='signup-button-workoutpage'>sign-up</button></Link>
        <h4>already have an acoount?<Link to='/user'>Login</Link></h4>
      </div>
        </div>
      }
    </div>
      </div>
  )
}

export default Workoutspage
