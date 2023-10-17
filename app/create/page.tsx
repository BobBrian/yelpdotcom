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

      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>


      <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 
          rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">1</a>
            </li>
            <li>
              <a  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">2</a>
            </li>
            <li>
              <a  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">3</a>
            </li>
            <li>
              <a  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">4</a>
            </li>
            <li>
              <a  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">5</a>
            </li>
          </ul>
      </div>

      <textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50
       rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
       placeholder="Write your review here..."></textarea>

      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Create Review</button>

    </form>
  )
}
