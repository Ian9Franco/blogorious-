'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  // Función para manejar el inicio de sesión o registro
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      if (isSignUp) {
        // Crear nueva cuenta con Firebase
        await createUserWithEmailAndPassword(auth, email, password)
      } else {
        // Iniciar sesión con Firebase
        await signInWithEmailAndPassword(auth, email, password)
      }
      // Redirigir al usuario a la página de cuadrícula si la autenticación es exitosa
      router.push('/grid')
    } catch (error) {
      console.error('Error de autenticación:', error)
      setError(isSignUp ? 'Error al crear la cuenta. Inténtalo de nuevo.' : 'Error al iniciar sesión. Verifica tus credenciales.')
    }
  }

  // Función para alternar entre inicio de sesión y registro
  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp)
    setError('')
  }

  // Función para alternar la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          {isSignUp ? 'Crear cuenta' : 'Iniciar sesión'}
        </h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-300">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-400"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            {isSignUp ? 'Crear cuenta' : 'Iniciar sesión'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          {isSignUp ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta?'}
          <button
            onClick={toggleAuthMode}
            className="ml-1 text-blue-500 hover:text-blue-400 focus:outline-none focus:underline"
          >
            {isSignUp ? 'Inicia sesión' : 'Regístrate'}
          </button>
        </p>
      </div>
    </div>
  )
}