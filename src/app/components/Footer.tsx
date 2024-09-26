'use client'

import { useAuth } from '../auth-provider'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/config'
import { Monitor, Sun, Moon } from 'lucide-react'
import { useTheme } from '../theme-provider'

export default function Footer() {
  const { user } = useAuth()
  const { theme, setTheme } = useTheme()

  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
    }
  }

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 p-4 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center text-gray-600 dark:text-gray-400 text-sm">
        <div className="flex items-center space-x-2">
          <span>{user?.email}</span>
          <button onClick={handleSignOut} className="hover:text-black dark:hover:text-white transition-colors">
            Sign out
          </button>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => setTheme('system')} 
            className={`p-1 ${theme === 'system' ? 'text-black dark:text-white' : 'hover:text-black dark:hover:text-white'} transition-colors`}
            aria-label="Use system theme"
          >
            <Monitor size={16} />
          </button>
          <button 
            onClick={() => setTheme('light')} 
            className={`p-1 ${theme === 'light' ? 'text-black dark:text-white' : 'hover:text-black dark:hover:text-white'} transition-colors`}
            aria-label="Use light theme"
          >
            <Sun size={16} />
          </button>
          <button 
            onClick={() => setTheme('dark')} 
            className={`p-1 ${theme === 'dark' ? 'text-black dark:text-white' : 'hover:text-black dark:hover:text-white'} transition-colors`}
            aria-label="Use dark theme"
          >
            <Moon size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}