import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user")
    return savedUser ? JSON.parse(savedUser) : null
  })

  const login = (email, password) => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || []

    const foundUser = savedUsers.find(
      (u) => u.email === email && u.password === password
    )

    if (foundUser) {
      setUser(foundUser)
      return true
    }

    return false
  }

  const register = (email, password) => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || []

    const newUser = { email, password }

    localStorage.setItem("users", JSON.stringify([...savedUsers, newUser]))
    setUser(newUser)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user") 
  }

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user))
    }
  }, [user])

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}