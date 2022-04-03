import React, { useContext } from "react"
import { Context } from "./context"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Dashboard from "./components/Dashboard"
import Users from "./components/Users"
import User from "./components/User"
import NotFound from "./components/NotFound"
import Nav from "./components/Nav"
import Login from "./components/Login"
import Signup from "./components/Signup"

const App = () => {
  const { users } = useContext(Context)

  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="users" element={<Users users={users} />} />
        <Route path="users/:userId" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App