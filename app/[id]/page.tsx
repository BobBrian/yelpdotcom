'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import {useState, useEffect} from 'react'
import Link from 'next/link'

interface Resturant {
  id:number,
  authorname:string,
  resturantname:string,
  body:string,
  rating: number
}

export default function ReviewDetails() {

  const [resturant,setResturant] = useState<Resturant[]>([])
  const params = useParams()

  const id = params.id

  //GET REQUEST
  useEffect(() => {
    fetch("http://localhost:3100/resturant/"+ id)
    .then(response => response.json())
    .then(json => setResturant(json));
  },[])

  return (
    <div className="block max-w-2/4 p-6 bg-white border border-gray-200 rounded-lg ">
      {resturant.map(rest => (
        <div key={rest.id}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Review By {rest.authorname}</h5>
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">For {rest.resturantname}</h4>
          <p className="font-normal text-gray-700">{rest.body}</p>
          <p className="font-normal text-gray-700">Overall Rating{rest.rating}</p>
          <a className="mt-2 mb-2 text-center inline-flex items-center px-3 py-2 text-sm font-medium 
          text-center text-white bg-red-600 rounded-lg">
          <Link href="/">Back</Link>
      </a>
          
        </div>
      ))}

    </div>
  )
}
