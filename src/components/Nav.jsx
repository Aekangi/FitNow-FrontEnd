import { Link } from "react-router-dom";
import React from 'react'

function Nav({ authenticated, user, handleLogOut }) {
    let authenticatedOptions
    if (user) {
      authenticatedOptions = (
        <nav>
            <Link to="/">Home</Link>
            <Link to='/exercises'>Workouts</Link>
            <Link to="/dietplans">Diet Plans</Link>
            <Link onClick={handleLogOut} to="/">
              Sign Out
            </Link>
        </nav>
      )
    }
    const publicOptions = (
      <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">SignUp</Link>
          <Link to='/exercises'>Workouts</Link>
        <Link to="/dietplans">Diet Plans</Link>
      </nav>
    )
  
  
  
    return (
        <div>{authenticated && user ? authenticatedOptions : publicOptions}</div>
        )
}

export default Nav