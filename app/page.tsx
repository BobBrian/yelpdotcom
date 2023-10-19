"use client"
import Link from 'next/link'
import React from 'react'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'


interface Resturant {
    id:number,
    authorname:string,
    resturantname:string,
    body:string,
    rating: number
}

export default function Home() {

  const router = useRouter()

  const [resturant,setResturant] = useState<Resturant[]>([])

  //GET REQUEST
  //This HHTP Method Works
  useEffect(() => {
    fetch("http://localhost:3100/resturant")
    .then(response => response.json())
    .then(json => setResturant(json));
  },[])

  //GET SPECIFIC DETAILS
  const LoadDetails = (id:number) => {
    router.push(`/todos/${id}`)
  }


  return (
    <main>
        <h1 className="text-slate-200 text-center text-4xl mb-8">Chibuikem Nwauche</h1>
        <h2 className="text-slate-200 text-center text-3xl mb-6">Review Application</h2>

        {/* <button className="mt-2 mb-2 text-center inline-flex items-center px-3 py-2 text-sm font-medium 
          text-center text-white bg-blue-700 rounded-lg">
          <Link href="/create">Create New Review</Link>
        </button> */}

        
        
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Review By
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Resturant Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Rating
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Expand
                        </th>
                    </tr>
                </thead>
                <tbody>
                  
                    {resturant.map(rest => (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={rest.id}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {rest.authorname}
                        </th>
                        <td className="px-6 py-4">
                            {rest.resturantname}
                        </td>
                        <td className="px-6 py-4">
                            {rest.rating}
                        </td>
                        <td className="px-6 py-4">
                           <button className="mt-2 mb-2 text-center inline-flex items-center px-3 py-2 text-sm font-medium 
                                text-center text-white bg-blue-700 rounded-lg" >
                                {/* <Link href={`/resturant/${rest.id}`}>View Details</Link> */}
                            </button>
                        </td>
                      </tr>
                    ))}    
                </tbody>
            </table>
        </div>

    </main>
  )
}

