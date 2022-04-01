import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import User from "./components/Users"
import Users from "./components/Users"
import Footer from "./components/Footer"

const App = () => {
  const data = [
    {
      id: 1,
      username: "user1",
      email: "email@email.com",
      profilepic: "./images/cat1.jpg",
    },
    {
      id: 2,
      username: "user2",
      email: "email@email.com",
      profilepic: "./images/cat2.jpg",
    }
  ]

  const [loggedInUser, setLoggedInUser] = useState(false)
  const [users, setUsers] = useState(data)

  useEffect(() =>{
    setUsers(data)
  }, [])

  return (
    <div>
      <Header user={loggedInUser} setUser={setLoggedInUser}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/users" element={<Users users={users} />}></Route>
        {users?.map(user => <Route key={user.id} path={`/users/${user.username}`} element={<User user={user} />}></Route>)}
      </Routes>
      <Footer/>
    </div>
  )
}

export default App