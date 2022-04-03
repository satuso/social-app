import React, { useContext } from "react"
import { Context } from "./context"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import User from "./components/Users"
import Users from "./components/Users"
import Footer from "./components/Footer"
import NotFound from "./components/NotFound"

const App = () => {
  const { users } = useContext(Context)
  return (
    <div>
      <Header/>
      <Nav/>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/users" element={<Users />}></Route>
          {users && users.map(user => <Route key={user.id} path={`/users/${user.displayName}`} element={<User user={user}/>}></Route>)}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App