import React, { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import Search from "./Search"

const Users = ({ users }) => {
  const [search, setSearch] = useState("")
  const filteredUsers = !search ? users : users.filter(user => user.username.toLowerCase().includes(search.toLowerCase()))
  return (
    <main>
      <h1>Users</h1>
      <Search 
        search={search}
        setSearch={setSearch}
      />
      <ul>
        {filteredUsers.sort((a, b) => a.username.localeCompare(b.username)).map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.username}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </main>
  )
}

export default Users