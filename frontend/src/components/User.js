import React from "react"
import PropTypes from "prop-types"

const User = ({ user }) => {
  console.log(user)
  return (
    <div className="content">
      <h2>{user.username}</h2>
      <div className="profile">
        <ul>
          <li>Username: {user.username}</li>
          <li>Email: {user.email}</li>
        </ul>
      </div>
    </div>
  )
}
export default User

User.propTypes = {
  user: PropTypes.any
}