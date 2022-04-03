import React, { useEffect, useState } from "react"
import axios from "axios"

export const Context = React.createContext()

export const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/users")
        setUsers(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    sendGetRequest()
  }, [])

  return (
    <Context.Provider value={{ users }}>{children}</Context.Provider>
  )
}