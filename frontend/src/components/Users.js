import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Users = ({ users }) => {
  return (
    <div className="content">
      {users?.map(user => <Link key={user.id} to={`/users/${user.username}`}>{user.username}</Link>)}
    </div>
  )
}
export default Users

Users.propTypes = {
  users: PropTypes.array
}