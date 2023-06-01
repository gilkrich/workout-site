import React from 'react'
import './workoutcard.css'
import { Outlet, Link, useParams } from 'react-router-dom'

function workoutCard({image,name,goal,difficulty,exercises,equipment}) {
  return (
    <span className='card-container'>
     <Link to={`${name}`}>
     <img src={image} alt="" style={{width:"315px",borderRadius:"20px 20px 0 0"}}/>
     </Link>    
        <h2>{name}</h2>
        <div className='content'>
        <div className='space'> <span className='bold'>Goal:</span>{goal}</div>
        <div className='space'><span className='bold'>Difficulty:</span>{difficulty}</div>
        <div className='space'><span className='bold'>Exercises:</span>{exercises}</div>
        <div className='space'><span className='bold'>Equipment:</span>{equipment}</div>
        </div>
    </span>
  )
}

export default workoutCard