import React from "react"

const Image = ({ user, index, setIndex }) => {
  return (
    <div className="images">
      <button onClick={() => setIndex((prevIndex) =>
        prevIndex === user.images.length - 1 ? 0 : prevIndex + 1
      )}>←</button>
      {user.images && <img src={user.images[index].image} alt={user.username} className="image"/>}
      <button onClick={() => setIndex((prevIndex) =>
        prevIndex === user.images.length - 1 ? 0 : prevIndex + 1
      )}>→</button>
    </div>
  )
}
export default Image