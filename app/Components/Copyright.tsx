import React from 'react'

const Copyright = () => {
  return (
    <div>
      <div className="bg-[#1a1a1a] border-t border-gray-800 py-6">
        <p className="text-white flex items-center justify-center gap-2">
          © {new Date().getFullYear()} Made with ❤️ by Anurag Vashisht
        </p>
      </div>
    </div>
  )
}

export default Copyright
