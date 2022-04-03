import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import AddComment from "./AddComment"

const User = () => {
  const { userId } = useParams()
  const [user, setUser] = useState([])
  const [index, setIndex] = useState(0)

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

  console.log(index)

  if (!user) return null
  
  return (
    <main>
      <div className="profile-page">
        <div className="profile">
          <div>
            <img src={user.profilePic} alt={user.username} className="profile-pic"/>
            <h2>{user.username}</h2>
            <p>{user.name}, {user.city} {user.country}</p>
            <p>{user.email}</p>
            <p>{user.dateOfBirth}</p>
          </div>
        </div>
        <div>
          <div className="images">
            <button onClick={() => setIndex((prevIndex) =>
              prevIndex === user.images.length - 1 ? 0 : prevIndex + 1
            )}>←</button>
            {user.images && <img src={user.images[index].image} alt={user.username} className="image"/>}
            <button onClick={() => setIndex((prevIndex) =>
              prevIndex === user.images.length - 1 ? 0 : prevIndex + 1
            )}>→</button>
          </div>
          <div className="comments">
            <h3>Comments</h3>
            {user.images && user.images[index].comments.map(comment => <p key={comment.id}>{comment.username}: {comment.message} {comment.date}</p>)}
            <AddComment />
          </div>
        </div>
      </div>
    </main>
  )
}

export default User