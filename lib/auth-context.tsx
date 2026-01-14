"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("steaks-user")
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (e) {
        console.error("Failed to load user:", e)
      }
    }
  }, [])

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("steaks-user", JSON.stringify(user))
    } else {
      localStorage.removeItem("steaks-user")
    }
  }, [user])

  const signIn = async (email: string, password: string) => {
    // Simulate authentication - in production, this would call an API
    await new Promise((resolve) => setTimeout(resolve, 500))

    // For demo purposes, accept any email/password
    const userName = email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1)
    setUser({ name: userName, email })
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("steaks-user")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
