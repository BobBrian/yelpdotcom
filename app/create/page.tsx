"use client"
import React, { useState , useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface RatingResturant {
  id:number,
  ratingid: number
}


export default function CreateReview() {

  //New Method of a React Hook storing all the Form values in One State
  const [resturantvalues, setResturantValues] = useState({
    authorname:'',
    resturantname:'',
    body:'',
    rating:''
  })

  //Second Reacthook to pull the rating id so that it can be asssingned to 
  //The Table with Resturant Detaisl
  const[ratingid,setRatingid] = useState<RatingResturant[]>([])

  const router = useRouter();

  //GET REQUEST
  //Used to Populate the Dropdown List
  useEffect(() => {
    fetch("http://localhost:3100/comments")
    .then(response => response.json())
    .then(json => setResturantValues(json));
  },[])

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const rest = {resturantvalues}

    fetch("http://localhost:3100/resturant",{
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rest)
    }).then(() =>{
      console.log("A NEW TODO HAS BEEN ADDED")
      router.push('/')
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label className="block mb-2 text-2xl font-medium text-slate-200">Author Name</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-blue-500 focus:border-blue-500 p-2.5  w-6/12"
        onChange={e => setResturantValues({...resturantvalues, authorname: e.target.value})} required/>
      </div>

      <div className="mb-6">
        <label className="block mb-2 text-2xl font-medium text-slate-200">Resturant Name</label>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-blue-500 focus:border-blue-500 p-2.5  w-6/12"
        onChange={e => setResturantValues({...resturantvalues, resturantname: e.target.value})} required/>
      </div>

      {/* Poormans DropDown List */}
      <div>
        <h1>Slect Rating</h1>
        <select onChange={e => setResturantValues({...resturantvalues, rating: e.target.value})}>
          {ratingid.map(rates => (
            <option key={rates.id}>{rates.ratingid}</option>
          ))}
        </select>
      </div>

      <textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50
       rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
       placeholder="Write your review here..." onChange={e => setResturantValues({...resturantvalues, body: e.target.value})}></textarea>

      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 
      focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Create Review</button>

      <a className="mt-2 mb-2 text-center inline-flex items-center px-3 py-2 text-sm font-medium 
          text-center text-white bg-red-600 rounded-lg">
          <Link href="/">Back</Link>
      </a>

    </form>
  )
}
