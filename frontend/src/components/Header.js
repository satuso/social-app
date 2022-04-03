import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <Link to="/"><h1><i className="fas fa-icons"></i> Social App</h1></Link>
      <div className="login">
        <div>
          Logged in as <Link to="/">Log Out</Link></div> 
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  )
}

export default Header