import React from 'react'

export default function CreateReview() {
  return (
    <form>
      <div className="mb-6">
        <label className="block mb-2 text-2xl font-medium text-slate-200">Author Name</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-blue-500 focus:border-blue-500 p-2.5  w-6/12" required/>
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-2xl font-medium text-slate-200">Resturant Name</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-blue-500 focus:border-blue-500 p-2.5  w-6/12" required/>
      </div>

      <button >
        Rating 
      </button>


      
    </form>
  )
}
