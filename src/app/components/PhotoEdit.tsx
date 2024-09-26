import { useState } from 'react'

export default function PhotoEdit({ photo }) {
  const [photoData, setPhotoData] = useState(photo)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setPhotoData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the updated data to your backend
    console.log('Updated photo data:', photoData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={photoData.title}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags</label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={photoData.tags}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      {/* Add more fields as needed */}
      <div>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Update
        </button>
      </div>
    </form>
  )
}