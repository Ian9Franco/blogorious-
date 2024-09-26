'use client'

import { useState } from 'react'
import { Edit, Trash2, Upload } from 'lucide-react'

export default function LockView() {
  const [photos] = useState([
    { id: 1, title: 'Untitled', date: '24 SEP 2024 12:59AM' },
    { id: 2, title: 'axe', date: '24 SEP 2024 12:59AM' },
    { id: 3, title: 'Untitled', date: '24 SEP 2024 12:59AM' },
    // ... add more photos as needed
  ])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-x-4">
          <button className="font-bold text-black dark:text-white">Photos (15)</button>
          <button className="text-gray-600 dark:text-gray-400">Tags (2)</button>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
          <Upload className="inline-block mr-2" size={16} />
          Upload Photos
        </button>
      </div>
      <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 p-4 rounded-md">
        Photo updates detected—they may take several minutes to show up for visitors
      </div>
      <div className="space-y-4">
        {photos.map((photo) => (
          <div key={photo.id} className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-md shadow transition-colors duration-300">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
              <div>
                <h3 className="font-bold text-black dark:text-white">{photo.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{photo.date}</p>
              </div>
            </div>
            <div className="space-x-2">
              <button className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Edit size={16} />
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}