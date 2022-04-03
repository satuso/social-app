import React, { useContext } from "react"
import { Context } from "../context"
import { Link } from "react-router-dom"

const Users = () => {
  const { users } = useContext(Context)

  return (
    <>
      {users && users.map(user => <Link key={user.id} to={`/users/${user.username}`}>{user.username}</Link>)}
    </>
  )
}

export default Users