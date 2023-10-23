
"use client"
import React from 'react'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { redirect } from 'next/navigation'


const CreateReview = () => {
  const router = useRouter()

  const [authorname,setAuthorname] = useState('')
  const [resturantname,setResturantname] = useState('')
  const [body,setBody] = useState('')

  const createPrompt = async (e:any) => {
    //e.preventDefault();
    try {
        const rest = {authorname,resturantname,body}
        const response = fetch("http://localhost:3100/resturant",{
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(rest)
        })
        
        if(!response){
          redirect("/")  
        }
    } catch (error) {
        console.log(error);
    }

  }

  return (
    <form >
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" value={authorname}  className="block py-2.5 px-0 w-2/4 text-sm text-gray-900 bg-gray-50
                     border border-gray-300 border-gray-300 appearance-none " onChange={(e) =>setAuthorname(e.target.value)} placeholder="Enter Author Name " 
                     required />
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" value={resturantname}  className="block py-2.5 px-0 w-2/4 text-sm text-gray-900 bg-gray-50
                     border border-gray-300 border-gray-300 appearance-none "  onChange={(e) =>setResturantname(e.target.value)} placeholder="Enter Resturant Name"
                     required />
                </div>  
            </div>

            <textarea id="message" value={body}  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50
            rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-8"
            onChange={(e) =>setBody(e.target.value)} required ></textarea>

            <button  className="text-white bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:ring-blue-300 font-medium rounded-lg 
            text-sm px-5 py-2.5 mr-2 mb-2 " onClick={createPrompt}>Create Review</button>
   </form>
       
  )

}

export default CreateReview
