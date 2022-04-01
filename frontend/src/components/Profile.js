import React from "react"
import cat from "../images/cat1.jpg"

const Profile = () => {
  return (
    <div className="content">
      <h2>Hello!</h2>
      <div className="profile">
        <img src={cat} className="profile-pic" alt="user"/>
        <ul>
          <li>Username: </li>
          <li>Email: </li>
        </ul>
      </div>
    </div>
  )
}
export default Profile