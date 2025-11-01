"use client"
import React, { createContext, useContext, useState } from "react"

type User = {
  id: string
  name: string
  email: string
  role: "student" | "teacher"
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  getUser: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null)
const [user, setUser] = useState<User | null>({
  id: "0",
  name: "Ezz",
  email: "Ezz@example.com",
  role: "student"
})


  const login = async (email: string, password: string) => {
    console.log(`Logging in user:${email} ${password}`)
  }

  const register = async (name: string, email: string, password: string) => {
      console.log(`Registering user: ${name} ${email} ${password}`)
  }

  const logout = () => {
    console.log("Logging out user:")
  }

  const getUser = () => {
    console.log("Fetching user data:")
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, getUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used inside AuthProvider")
  return context
}
