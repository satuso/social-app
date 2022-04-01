import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Header = ({ loggedInUser }) => {
  return (
    <div className="header">
      <Link to="/"><h1><i className="fas fa-icons"></i> Social App</h1></Link>
      <div className="login">
        {loggedInUser ?
          <div>
            Logged in as username <Link to="/">Log Out</Link></div> 
          :
          <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Header

Header.propTypes = {
  loggedInUser: PropTypes.bool
}