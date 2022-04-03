import React from "react"
import AddComment from "./AddComment"

const Comments = ({ user, index }) => {
  return (
    <div className="comments">
      <h3>Comments</h3>
      {user.images && user.images[index].comments.map(comment => <p key={comment.id}>{comment.username}: {comment.message} {comment.date}</p>)}
      <AddComment />
    </div>
  )
}
export default Comments