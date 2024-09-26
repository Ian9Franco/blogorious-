'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LayoutList, LayoutGrid, Lock, Search } from 'lucide-react'

export default function Header() {
  const router = useRouter()

  return (
    <header className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link href="/fullframe" className="text-gray-400 hover:text-white transition-colors">
            <LayoutList size={20} />
            <span className="sr-only">Vista de marco completo</span>
          </Link>
          <Link href="/grid" className="text-gray-400 hover:text-white transition-colors">
            <LayoutGrid size={20} />
            <span className="sr-only">Vista de cuadrícula</span>
          </Link>
          <Link href="/lock" className="text-gray-400 hover:text-white transition-colors">
            <Lock size={20} />
            <span className="sr-only">Vista bloqueada</span>
          </Link>
          <button 
            onClick={() => router.push('/search')} 
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Search size={20} />
            <span className="sr-only">Buscar</span>
          </button>
        </div>
        <h1 className="text-white text-lg">
          Un blog increíble sobre cosas geniales
        </h1>
      </div>
    </header>
  )
}