export default function Sidebar() {
    return (
      <aside className="w-64 ml-8">
        <div className="bg-gray-800 p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Este es un blog para compartir pensamientos</h2>
          <div className="mb-4">
            <h3 className="font-medium mb-2">TAGS</h3>
            <p className="text-sm text-gray-400">ENIGMA TAG</p>
          </div>
          <p className="text-sm text-gray-400">2 PHOTOS</p>
        </div>
      </aside>
    )
  }