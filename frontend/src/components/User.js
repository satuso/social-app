import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import UserDetails from "./UserDetails"
//import Image from "./Image"
//import Comments from "./Comments"

const User = () => {
  const { userId } = useParams()
  const [user, setUser] = useState([])
  /* const [index, setIndex] = useState(0)

  <Image user={user} index={index} setIndex={setIndex}/>
  <Comments user={user} index={index}/>*/

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

  if (!user) return null
  
  return (
    <main>
      <div className="profile-page">
        <UserDetails user={user} />
        <div>

        </div>
      </div>
    </main>
  )
}

export default User