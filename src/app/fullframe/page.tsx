'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Edit, Star, Download, Trash2 } from 'lucide-react'

export default function FullFrameView() {
  const [photos] = useState([
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

  return (
    <div className="flex flex-col items-center space-y-8">
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
  )
}