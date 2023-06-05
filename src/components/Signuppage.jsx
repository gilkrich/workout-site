import React from 'react'
import TextField from '@mui/material/TextField';
import { Outlet, Link, useParams, useNavigate } from 'react-router-dom'
import { useState, } from 'react';
import facebook from './images/icons8-facebook-48.png';
import google from './images/icons8-google-48.png';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Signuppage({ isloggedout, setloggedout }) {
  const navigate = useNavigate()
  const [username, setusername] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const [verify, setverify] = useState()
  const [userObj, setuserObj] = useState({})
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('signup-key', 'template_a0lqq9b', form.current, '4CMeAQ8JlwKsHlY8A')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  function setUser() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify([]))
    }
    if (password.length < 6 || password.length > 12) {
      alert("password must be at least 6 signs and less then 12 signs")
    }
    else if (password.length >= 6 && password.length <= 12 && password == verify) {
      const users = JSON.parse(localStorage.getItem('users'))
      const check = users.find(a => a.email == email)
      if (check != undefined) {
        alert("already taken")
      } else {
        if (email.includes("@") && email.includes(".com")) {
          const halfemail = email.split("@")[1].split(".")[0];
          if ((halfemail == "gmail" || halfemail == "walla")) {
            console.log("hey")
            const person = { username: username, email: email, password: password, verify: verify, creditnum: "", confirmationnum: "", myworkout: "" };
            users.push(person)
            localStorage.setItem('users', JSON.stringify(users))
            localStorage.setItem('loggeduser', JSON.stringify(person))
            setloggedout(false)
            navigate(-1)
          }
          else {
            alert("email isnt valid")
          }
        }
        else {
          alert("email isnt valid")
        }
      }
    }
    else {
      alert("password got to be the same")
    }
  }


  return (
    <div>
      <div className='sign-page'>
        <form ref={form} onSubmit={sendEmail} className='sign-page'>
        <h2>Sign-up</h2>
        <TextField id="filled-basic" label="username" variant="filled" className='user-inputs' type='text'  name="user_name" onChange={e => { setusername(e.target.value) }} />
        <TextField id="filled-basic" label="email" variant="filled" className='user-inputs' type='email' name="user_email" onChange={e => { setemail(e.target.value) }} />
        <TextField id="filled-basic" label="Password" variant="filled" className='user-inputs' type='password' onChange={e => { setpassword(e.target.value) }} />
        <TextField id="filled-basic" label="Confirm Password" variant="filled" className='user-inputs' type='password' onChange={e => { setverify(e.target.value) }} />
        <div style={{ width: '100%', marginLeft: '113px' }}>
          <input type="checkbox" name="remember" id="remember" /><label htmlFor="remember">remember me</label>

        </div>
          <input type="submit" value="Sign-up" className='user-buttons' onClick={() => setUser()}/>
        </form>
        {/* <button className='user-buttons' onClick={() => setUser()}>Sign-up</button> */}
        <p>Or sign-up with</p>
        <div className='with'>
          <button className='with-button'> <img src={facebook} alt="" width='20px' height='20px' />Facebook</button>
          <button className='with-button'><img src={google} alt="" width='20px' height='20px' />Google</button>
        </div>
        <p>Already a member?<Link to='/user'>Login here</Link></p>
      </div>
    </div>
  )
}
export default Signuppage

