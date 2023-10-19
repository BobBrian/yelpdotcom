//NOTE THIS IS A MUCH SIMPLER VERSION OF THE INTENDED CODE MEANT TO BE A FOUNDATION FOR IMPROVEMENT
"use client"
import Link from 'next/link'
import React from 'react'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation';


interface Resturant {
    id:number,
    authorname:string,
    resturantname:string,
    body:string,
    rating: number
}

interface RatingResturant {
    id:number,
    ratingid: number
}

export default function Home() {

  const [resturant,setResturant] = useState<Resturant[]>([])

  const [resturantvalues, setResturantValues] = useState({
    authorname:'',
    resturantname:'',
    body:'',
    rating:''
  })

  const[ratingid,setRatingid] = useState<RatingResturant[]>([])

  //GET request to Display all Resturant Information
  useEffect(() => {
    fetch("http://localhost:3100/resturant")
    .then(response => response.json())
    .then(json => setResturant(json));
  },[])

  //GET request to populate the Pesudo Drop Down List
  useEffect(() => {
    fetch("http://localhost:3100/comments")
    .then(response => response.json())
    .then(json => setRatingid(json));
  },[])

  //POST Request to Create a New Entry in the Table
  const handleSubmit = (e:any) => {
    //e.preventDefault();
    const rest = {resturantvalues}

    fetch("http://localhost:3100/resturant",{
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rest)

    }).then(() =>{
      console.log("A NEW TODO HAS BEEN ADDED")
    })
  }

  return (
    <main>
        <h1 className="text-slate-200 text-center text-4xl mb-8">Chibuikem Nwauche</h1>
        <h2 className="text-slate-200 text-center text-3xl mb-6">Review Application</h2>

        {/* //FORM */}
        <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text"  className="block py-2.5 px-0 w-2/4 text-sm text-gray-900 bg-gray-50
                     border border-gray-300 border-gray-300 appearance-none " placeholder="Enter Author Name " 
                     onChange={e => setResturantValues({...resturantvalues, authorname: e.target.value})} required />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text"  className="block py-2.5 px-0 w-2/4 text-sm text-gray-900 bg-gray-50
                     border border-gray-300 border-gray-300 appearance-none " placeholder="Enter Resturant Name"
                     onChange={e => setResturantValues({...resturantvalues, resturantname: e.target.value})}  required />
                </div>  
            </div>

            <div>
                <h1 className="text-slate-200">Slect Rating</h1>
                <select className="block py-2.5 px-0 w-1/4 text-sm text-gray-900 bg-gray-50 mb-8
                border border-gray-300 border-gray-300 appearance-none" onChange={e => setResturantValues({...resturantvalues, rating: e.target.value})}>
                {ratingid.map(rates => (
                    <option key={rates.id}>{rates.ratingid}</option>
                ))}
                </select>
            </div>

            <textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50
            rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-8"
            placeholder="Write your review here..." onChange={e => setResturantValues({...resturantvalues, body: e.target.value})}></textarea>

            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Create Review</button>
        </form>
       
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
                            Review Summary
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Rating
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
                            {rest.body}
                        </td>

                        <td className="px-6 py-4">
                            {rest.rating}
                        </td>
                        
                      </tr>
                    ))}    
                </tbody>
            </table>
        </div>

    </main>
  )
}

