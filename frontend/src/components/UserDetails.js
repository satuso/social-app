import React from "react"

const UserDetails = ({ user }) => {
  return (
    <div className="profile">
      <div>
        <img src={user.profilePic} alt={user.username} className="profile-pic"/>
        <h2>{user.username}</h2>
        <p>{user.name}, {user.city} {user.country}</p>
        <p>{user.email}</p>
        <p>{user.dateOfBirth}</p>
      </div>
    </div>
  )
}
export default UserDetails