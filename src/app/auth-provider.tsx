'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '../app/firebase/config'

const AuthContext = createContext<{ user: User | null }>({ user: null })

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}