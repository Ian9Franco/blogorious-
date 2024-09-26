'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { LayoutGrid, LayoutList, Lock, Search, Edit, Star, Download, Trash2 } from 'lucide-react'

// Definimos un tipo para nuestras fotos
type Photo = {
  id: number
  src: string
  alt: string
  title: string
  caption: string
  tags: string[]
  date: string
}

export default function PhotoViewer() {
  const router = useRouter()
  const [view, setView] = useState<'grid' | 'full' | 'lock'>('grid')
  const [photos] = useState<Photo[]>([
    { 
      id: 1, 
      src: '/placeholder.svg?text=Spells', 
      alt: 'Spell Chart', 
      title: 'INVOKER',
      caption: 'INVOKER',
      tags: ['ENIGMA TAG'],
      date: '22 SEP 2024 4:51PM'
    },
    { 
      id: 2, 
      src: '/placeholder.svg?text=Character', 
      alt: 'Character Portrait', 
      title: 'ENIGMA',
      caption: 'ENIGMA CAPTION',
      tags: ['ENIGMA TAG'],
      date: '22 SEP 2024 4:47PM'
    },
  ])

  // Función para cambiar la vista
  const changeView = (newView: 'grid' | 'full' | 'lock') => {
    setView(newView)
    router.push(`/${newView}`)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 border-b border-gray-800">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <button 
              className={`p-2 ${view === 'full' ? 'bg-gray-800' : 'hover:bg-gray-800'} rounded-md`}
              onClick={() => changeView('full')}
            >
              <LayoutList size={20} />
            </button>
            <button 
              className={`p-2 ${view === 'grid' ? 'bg-gray-800' : 'hover:bg-gray-800'} rounded-md`}
              onClick={() => changeView('grid')}
            >
              <LayoutGrid size={20} />
            </button>
            <button 
              className={`p-2 ${view === 'lock' ? 'bg-gray-800' : 'hover:bg-gray-800'} rounded-md`}
              onClick={() => changeView('lock')}
            >
              <Lock size={20} />
            </button>
          </div>
          <h1 className="text-lg font-semibold">Un blog increíble sobre cosas geniales</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search photos, views, settings ..."
              className="bg-gray-800 text-white px-4 py-2 pr-10 rounded-md w-64"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </header>

      <main className="p-4">
        {view === 'grid' && (
          <div className="grid grid-cols-2 gap-4">
            {photos.map((photo) => (
              <div key={photo.id} className="relative aspect-square">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
        )}

        {view === 'full' && (
          <div className="flex flex-col items-center space-y-4">
            {photos.map((photo) => (
              <div key={photo.id} className="relative w-full max-w-4xl">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={1200}
                  height={800}
                  layout="responsive"
                  className="rounded-md"
                />
                <div className="absolute top-4 right-4 bg-gray-800 p-4 rounded-md">
                  <h2 className="text-xl font-bold mb-1">{photo.title}</h2>
                  <p className="text-sm text-gray-400 mb-2">{photo.caption}</p>
                  <div className="mb-2">
                    {photo.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-gray-700 rounded-full px-2 py-1 mr-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">{photo.date}</p>
                  <div className="flex space-x-2 mt-2">
                    <button className="p-1 hover:bg-gray-700 rounded-md">
                      <Edit size={16} />
                    </button>
                    <button className="p-1 hover:bg-gray-700 rounded-md">
                      <Star size={16} />
                    </button>
                    <button className="p-1 hover:bg-gray-700 rounded-md">
                      <Download size={16} />
                    </button>
                    <button className="p-1 hover:bg-gray-700 rounded-md">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {view === 'lock' && (
          <div className="flex justify-center items-center h-64">
            <p className="text-xl">Vista bloqueada - Contenido protegido</p>
          </div>
        )}
      </main>

      <footer className="p-4 border-t border-gray-800 flex justify-between items-center">
        <p className="text-sm text-gray-400">Admin | Made with exif-photo-blog</p>
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-800 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="3" x2="21" y1="15" y2="15"/><line x1="9" x2="9" y1="3" y2="21"/><line x1="15" x2="15" y1="3" y2="21"/></svg>
          </button>
          <button className="p-2 bg-gray-800 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          </button>
        </div>
      </footer>
    </div>
  )
}