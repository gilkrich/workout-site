import React from 'react'
import { Outlet, Link, useParams,useNavigate } from 'react-router-dom'
import WorkoutCard from './WorkoutCard'
import './workoutpage.css'
const Workoutspage = ({workoutData,setWorkoutData, workoutfakeData}) => {
    const logd = localStorage.getItem('loggeduser')


    function begin(e) {
      setWorkoutData(workoutfakeData.filter(item=>item.level==e))
    }

    function defa() {
      setWorkoutData(workoutfakeData)
    }


  return (
    // style={{display:"flex", flexWrap:"wrap",gap:"30px",justifyContent:"center" ,marginTop:'140px',marginBottom:'100px'}}
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
            />
            )
          }
          )
        }
      </div>
      <div className='if-logged'>
        <h2>want to see more sign up a new acoount and see every workout available</h2>
        <Link  to='/user/signup'><button className='signup-button-workoutpage'>sign-up</button></Link>
        <h4>already have an acoount?<Link>Login</Link></h4>
      </div>
        </div>
      }
    </div>
      </div>
  )
}

export default Workoutspage
