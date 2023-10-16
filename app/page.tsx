"use client"
import Link from 'next/link'
import React from 'react'
import {useState, useEffect} from 'react'

//This is the version of the main code that will be pushed into the master branch
//The code here uses remenant code from the static project file

//This page is where the listAllResturants and the Link to createReview and reviewDetails Page
//Stage 1 is the code built with dummy data to populate fields and make it easier to design
//The Front End
//VERSION 1:USING DUMMY DATA
//Dave Grey Video:https://www.youtube.com/watch?v=2NEV_M7NN6k
//ByteGrad Video:https://www.youtube.com/watch?v=TPACABQTHvM&t=84s

export default function Home() {

  const [resturant,setResturant] = useState([
    { id:1,authorname:"Bob A",resturantname:"Resturant A",body:"Food is Very Good", rating:5},
    { id:2,authorname:"Bob B",resturantname:"Resturant B",body:"Food is  Good", rating:4},
    { id:3,authorname:"Bob C",resturantname:"Resturant C",body:"Food is Average", rating:3},
    { id:4,authorname:"Bob D",resturantname:"Resturant D",body:"Food is Less than Average", rating:2},
    { id:1,authorname:"Bob E",resturantname:"Resturant E",body:"Food is Bad", rating:1}
  ])

  return (
    <main>
        <h1 className="text-slate-200 text-center text-4xl mb-8">Chibuikem Nwauche</h1>
        <h2 className="text-slate-200 text-center text-3xl mb-6">Review Application</h2>
        <a className="mt-2 mb-2 text-center inline-flex items-center px-3 py-2 text-sm font-medium 
          text-center text-white bg-blue-700 rounded-lg">
          <Link href="/create">Create New Review</Link>
        </a>
        
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
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                            <a href="#" className="font-medium text-blue-600  hover:underline">View Details</a>
                        </td>
                      </tr>
                    ))}    
                </tbody>
            </table>
        </div>

    </main>
  )
}

