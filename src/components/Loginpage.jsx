import React from 'react'
import TextField from '@mui/material/TextField';
import { Link ,useNavigate } from 'react-router-dom';
import './userpage.css'
import { useState } from 'react';

function Loginpage({isloggedout,setloggedout}) {
  const navigate = useNavigate()
  const [username,setUsername] =useState()
  const [usePassword,setUserPassword] =useState()
    function checklogin() {
        const users = JSON.parse(localStorage.getItem('users'))
        const check = users.find(a=>a.email==username&&a.password==usePassword)
            if (check==undefined) {
                alert("dont is")
            }
            else{              
                localStorage.setItem('loggeduser', JSON.stringify(check))
                setloggedout(false)
                navigate(-1)
            }
    }
  return (
    <div className='Login-page'>
       <h2>Login</h2>
       <TextField id="filled-basic" label="email" variant="filled" className='user-inputs' type='email' onChange={(e)=>setUsername(e.target.value)}/>
        <TextField id="filled-basic" label="Password" variant="filled" className='user-inputs'type='password'onChange={(e)=>setUserPassword(e.target.value)}/>
        <div style={{width:'100%' ,marginLeft:'113px'}}>
        <input type="checkbox" name="remember" id="remember" /><label htmlFor="remember">remember me</label>
        </div>
        <button className='user-buttons' onClick={()=>checklogin()}>Login</button>
        <p>Or login with</p>
        <div className='with'>
            <button className='with-button'> <img src="./src/images/facebookcolor.png" alt="" width='20px' height='20px' /> Facebook</button>
            <button className='with-button'><img src="./src/images/google.png" alt="" width='20px' height='20px'/> Google</button>
        </div>
         <p>Not a member?<Link to='Signup'>Sign up here</Link></p>
    </div>
  )
}

export default Loginpage
