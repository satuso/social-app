import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/users">Users</Link>
    </nav>
  )
}
export default Nav