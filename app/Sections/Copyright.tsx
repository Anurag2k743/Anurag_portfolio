import React from 'react'

const Copyright = () => {
  return (
    <div>
      <div className=" border-t border-[#1a1a1a] py-6">
        <p className="text-white flex items-center justify-center gap-2">
          Copy © {new Date().getFullYear()} All rights reserved 
        </p>
      </div>
    </div>
  )
}

export default Copyright
