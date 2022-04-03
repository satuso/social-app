import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const User = () => {
  const { userId } = useParams()
  const [user, setUser] = useState([])

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/users/${userId}`)
        setUser(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    sendGetRequest()
  }, [])

  return (
    <div className="profile">
      <img src={user.profilePic} alt={user.username} className="profile-pic"/>
      <div>
        <h2>{user.username}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  )
}

export default User