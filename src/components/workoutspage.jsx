import React from 'react'
import { Outlet, Link, useParams } from 'react-router-dom'
import WorkoutCard from './WorkoutCard'
const Workoutspage = ({workoutData,setWorkoutData}) => {
  return (
    <div style={{display:"flex", flexWrap:"wrap",gap:"30px",justifyContent:"center"}}>
      {workoutData?.map((item,index)=>{
        return(
        <WorkoutCard key={index}
         image={item.img}
          name={item.name}
          goal={item.goal} 
          difficulty={item.level}
          exercises={item.exercises}
          equipment={item.equipment}/>
        )
      })}
    </div>
  )
}

export default Workoutspage
