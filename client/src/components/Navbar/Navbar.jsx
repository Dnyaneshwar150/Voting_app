import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useAuth } from '../../store/auth'

const Navbar = () => {
      const { isLoggedIn } = useAuth()
      
  return (
    <div className='navbar'>
      <div className="navbar-brand">
            <h2>Eection Commission of india</h2>
      </div>

      <div className='navbar-links' >
         <NavLink to="/">Home</NavLink>
         {isLoggedIn ? (
            <>
            <NavLink to="/logout"><button>Logout</button></NavLink>
            <NavLink to="/result"><button>Result</button></NavLink>
            </>
         ):(
            <>
              <NavLink to="/register"><button>Register</button></NavLink> 
            </>
         )
       }
      </div>
    </div>
  )
}

export default Navbar