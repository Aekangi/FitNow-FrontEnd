import { Link } from "react-router-dom";
import React from 'react'
import '../styling/nav.css'

function Nav({ authenticated, user, handleLogOut }) {
    let authenticatedOptions
    if (user) {
      authenticatedOptions = (
        <nav>
            <Link to="/home">Home</Link>
            <Link to='/exercises'>Workouts</Link>
            <Link to="/dietplans">Diet Plans</Link>
            <Link onClick={handleLogOut} to="/">
              Sign Out 
            </Link>
            <Link to='/about'>About</Link>
        </nav>
      )
    }
    const publicOptions = (
      <nav>
          <Link to='/'>Sign In</Link>
          <Link  to="/register">Sign Up</Link>
          <Link to='/about'>About</Link>
      </nav>
    )
  
  
  
    return (
        <div>{authenticated && user ? authenticatedOptions : publicOptions}</div>
        )
}

export default Nav