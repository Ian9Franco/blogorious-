'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function GridView() {
  const [photos] = useState([
    { id: 1, src: '/placeholder.svg?text=Spells', alt: 'Spell Chart' },
    { id: 2, src: '/placeholder.svg?text=Character', alt: 'Character Portrait' },
  ])

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
  )
}