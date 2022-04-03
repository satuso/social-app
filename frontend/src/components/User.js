import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router"
import Loading from "../components/Loading"

const User = () => {
  const [user, setUser] = useState([])

  let { id } = useParams()

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/users/${id}`)
        console.log(res.data)
        setUser(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    sendGetRequest()
  }, [])

  return user ? (
    <div className="content">
      <h2>{user.username}</h2>
      <div className="profile">
        <ul>
          <li>Username: {user.username}</li>
          <li>Email: {user.email}</li>
        </ul>
      </div>
    </div>
  ) : (
    <Loading />
  )
}

export default User