import React from 'react'
import "./layout.css"
import { Outlet, Link, useParams } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='main-container'>
      <nav id='navbar'>
        <div >
          {/* <Link to='/' > <img src={real} alt="" className='logo' /></Link> */}
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_4TCWA8yv2mMkn6icruBLTRuTxVTwKlLTUg&usqp=CAU" alt="" width='200px' height='80px'/> */}
          <Link to='/' className='nav-link'>   <h2 style={{ color: 'white', fontSize: 'xxx-large' }}>TheGym</h2></Link>
        </div>
        <div id='nav-links-side'>
          <Link to='workouts' className='nav-link'>workouts</Link>
          <Link to='/' className='nav-link'>Home</Link>
          <Link  to='calendar'className='nav-link'>Calendar</Link>
          <Link  className='nav-link'>placeholde</Link>
        </div>
        <div className='nav-login-side'>
          <button className='login-button'><Link className='login-button-link'>Login</Link></button>
          <button className='signup-button'><Link className='signup-button-link'>Signup</Link></button>
        </div>
      </nav>
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
