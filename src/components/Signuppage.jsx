import React from 'react'
import TextField from '@mui/material/TextField';
import { Outlet, Link, useParams ,useNavigate } from 'react-router-dom'
import { useState , } from 'react';

function Signuppage({isloggedout,setloggedout}) {
    const navigate = useNavigate()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [verify, setverify] = useState()
    const [userObj, setuserObj] = useState({})

    function setUser() {
        if (!localStorage.getItem('users')){
            localStorage.setItem('users', JSON.stringify([]))
        }
        if (password == verify) {
            const users = JSON.parse(localStorage.getItem('users'))
            const check = users.find(a=>a.email==email)
            if (check!=undefined) {
                alert("already taken")
            }else{
                const person = { email: email, password: password, verify: verify , creditnum:"",confirmationnum:"",myworkout:""};
                users.push(person)
                localStorage.setItem('users', JSON.stringify(users))
                localStorage.setItem('loggeduser', JSON.stringify(person))
                setloggedout(false)
                navigate(-1)
            }
        }else{
            alert("password got to be the same")
        }
    }


    return (
        <div>
            <div className='sign-page'>
                <h2>Sign-up</h2>
                <TextField id="filled-basic" label="email" variant="filled" className='user-inputs' type='email' onChange={e => { setemail(e.target.value) }} />
                <TextField id="filled-basic" label="Password" variant="filled" className='user-inputs' type='password' onChange={e => { setpassword(e.target.value) }} />
                <TextField id="filled-basic" label="Confirm Password" variant="filled" className='user-inputs' type='password' onChange={e => { setverify(e.target.value) }} />
                <div style={{ width: '100%', marginLeft: '113px' }}>
                    <input type="checkbox" name="remember" id="remember" /><label htmlFor="remember">remember me</label>
                </div>
                <button className='user-buttons' onClick={() => setUser()}>Sign-up</button>
                <p>Or sign-up with</p>
                <div className='with'>
                    <button className='with-button'> Facebook</button>
                    <button className='with-button'>Google</button>
                </div>
                <p>Already a member?<Link to='/user'>Login here</Link></p>
            </div>
        </div>
    )
}

export default Signuppage
