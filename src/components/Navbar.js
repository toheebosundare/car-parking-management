import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { AiOutlineCar } from 'react-icons/ai'

// styles & images
import './Navbar.css'
// import Car from '../assets/logo.svg'


export default function Navbar() {
  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()


  return (
    <nav className='navbar'>
      <ul>
        <Link to='/'><li className='logo'>
          <AiOutlineCar style={{marginRight: "10px"}}/>
          <span>Easy Park</span>
        </li></Link>
        <li><Link to='/how'>How it works</Link></li>
        <li><Link to='/rent'>Rent out your space</Link></li>
        <li><Link to='/business'>Business</Link></li>
        <li><Link to='/ev'>EV</Link></li>
        <li><Link to='/company'>Company</Link></li>
        <li><Link to='/help'>Help</Link></li>        
        <li><Link to="/login">Login</Link></li>
        <Link to='/signup'><button className='btn-primary'>Signup</button></Link>
          
        {user && (
          <li>
            {!isPending && <button className="btn-primary" onClick={logout}>Logout</button>}
            {isPending && <button className="btn-primary" disabled>Logging out...</button>}
          </li>
        )}
      </ul>
    </nav>
  )
}
