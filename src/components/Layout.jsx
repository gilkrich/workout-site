import React, { useState } from 'react'
import "./layout.css"
import { Outlet, Link, useParams,  } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Hamburger from 'hamburger-react';
import logo from './images/logo1.png'
const Layout = ({isloggedout,setloggedout}) => {
  // const [isloggedout,setloggedout]= useState(false)
  const [signbutton,setsignbutton]= useState()
  const [navbar,setnavbar]= useState()
    
  function showout() {
    setsignbutton(!signbutton)
  }

  function signout() {
    if (localStorage.getItem('loggeduser')) {
      localStorage.removeItem("loggeduser")
      setloggedout(true)
    }
  }

   
  return (
    <div className='main-container'>
      <nav id='navbar'>
        <div >
          {/* <Link to='/' > <img src={real} alt="" className='logo' /></Link> */}
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_4TCWA8yv2mMkn6icruBLTRuTxVTwKlLTUg&usqp=CAU" alt="" width='200px' height='80px'/> */}
          <Link to='/' className='nav-link'>   <h2 style={{ color: 'white', fontSize: 'xxx-large' }}><img src={logo} alt="" style={{width:'300px' ,height:'100px'}} /></h2></Link>
        </div>
        <div id='nav-links-side'>
          <Link to='workouts' className='nav-link'>workouts</Link>
          <Link to='/' className='nav-link'>Home</Link>
          <Link  to='calendar'className='nav-link'>Calendar</Link>
          <Link  className='nav-link'>placeholde</Link>
        </div>
        <Hamburger color="white" className='menu-icon' onToggle={setnavbar}/>
        {localStorage.getItem('loggeduser')&&<div className='signout-container'>
          <h4 className='user-name-style'>{JSON.parse(localStorage.getItem('loggeduser')).username}</h4>
          <AccountCircleIcon style={{fontSize:'xx-large'}} id='user-icon' onClick={()=>showout()}/>
         {signbutton && <button className='signout-button' onClick={()=>signout()}><Link>signout</Link></button> }
        </div>
        }
       {!localStorage.getItem('loggeduser')&&<div className='nav-login-side'>
          <button className='login-button'><Link className='login-button-link' to='user'>Login</Link></button>
          <button className='signup-button'><Link className='signup-button-link' to='user/signup'>Signup</Link></button>
        </div>}
      </nav>
      
      {navbar&&<nav id='navbar-mobile'>
        <div id='nav-links-side-mobile'>
          <Link to='workouts' className='nav-link'>workouts</Link>
          <Link to='/' className='nav-link'>Home</Link>
          <Link  to='calendar'className='nav-link'>Calendar</Link>
          <Link  className='nav-link'>placeholde</Link>
        </div>
        {!localStorage.getItem('loggeduser')&&<div className='nav-login-side-mobile'>
         <Link className='nav-link' to='user'>Login</Link>
         <Link className='nav-link' to='user/signup'>Signup</Link>
        </div>}
        {localStorage.getItem('loggeduser')&&<div className='mobile-icon-container'>
        <h3 className='user-name-style'>{JSON.parse(localStorage.getItem('loggeduser')).username}</h3>
          <AccountCircleIcon style={{fontSize:'xx-large'}} className='user-icon'/>
          <Link  className='nav-link' onClick={()=>signout()}>signout</Link>
        </div>
        }
      </nav>}

   



      <Outlet />





      <footer className='footer'>
        <div className='nav-links-div'>
          <Link className='footer-link nav-bar-text'>About us</Link>
          <p className='nav-bar-text'>Our buissnes department</p>
          <p className='nav-bar-text'>Privacy Policy</p>
          <p className='nav-bar-text'>Security Policy</p>
        </div>
        <div className='nav-links-div'>
          <Link className='footer-link nav-bar-text'>Customer Service</Link>
          <p className='nav-bar-text'>needed</p>
          <p className='nav-bar-text'>Contact Us</p>
          <p className='nav-bar-text'>Cancelling a transaction</p>
        </div>
        <div className='nav-links-div'>
          <Link className='footer-link nav-bar-text'>our website & centers</Link>
          <p className='nav-bar-text'>our physical centers</p>
          <p className='nav-bar-text'>accessibility</p>
          <p className='nav-bar-text'>terms of use</p>
        </div>
        <div className='social-media'>
          <img src="https://www.citypng.com/public/uploads/preview/-11595327237ulqckjabpb.png" alt="" height='30px' className='social-media-images' />
          <img src="https://www.citypng.com/public/uploads/preview/-51614117422ddshgpwbbp.png" alt="" height='30px' className='social-media-images' />
          <img src="https://toppng.com/uploads/preview/youtube-icon-youtube-icon-logo-white-transparent-11553490886iqtu1kxymg.png" alt="" height='30px' className='social-media-images' />
          <img src="https://w7.pngwing.com/pngs/389/430/png-transparent-instagram-social-media-instagram-black-social-social-media-logo-icon.png" alt="" height='30px' className='social-media-images' />
        </div>
      </footer>
    </div>
  )
}

export default Layout
