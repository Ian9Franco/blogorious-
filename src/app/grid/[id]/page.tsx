import Image from 'next/image'

export default function PhotoDetail({ params }: { params: { id: string } }) {
  // In a real app, you'd fetch the photo data based on the ID
  const photo = {
    id: params.id,
    name: 'INVOKEsR',
    date: '22 SEP 2024 4:51PM',
    src: '/placeholder.svg?text=INVOKER',
    caption: 'INVOKER CAPTION',
    tags: ['ENIGMA TAG'],
  }

  return (
    <div className="flex">
      <div className="flex-1 p-4">
        <Image
          src={photo.src}
          alt={photo.name}
          width={800}
          height={600}
          className="rounded-lg"
        />
      </div>
      <aside className="w-64 p-4 bg-gray-800">
        <h2 className="text-xl font-bold mb-2">{photo.name}</h2>
        <p className="text-sm text-gray-400 mb-4">{photo.date}</p>
        <p className="mb-4">{photo.caption}</p>
        <div className="mb-4">
          <h3 className="font-medium mb-2">TAGS</h3>
          {photo.tags.map((tag) => (
            <span key={tag} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>
        <div className="space-y-2">
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
            Edit
          </button>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
            Favorite
          </button>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
            Download
          </button>
          <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors">
            Delete
          </button>
        </div>
      </aside>
    </div>
  )
}