"use client"
import React from 'react'
import {useState, useEffect} from 'react'



interface Resturant {
    id:number,
    authorname:string,
    resturantname:string,
    body:string
}



export default function Home() {

  const [resturant,setResturant] = useState<Resturant[]>([])


  const [authorname,setAuthorname] = useState('')
  const [resturantname,setResturantname] = useState('')
  const [body,setBody] = useState('')

  useEffect(() => {
    fetch("http://localhost:3100/resturant")
    .then(response => response.json())
    .then(json => setResturant(json));
  },[])

  const handleSubmit = (e:any) => {
    const rest = {authorname,resturantname,body}

    fetch("http://localhost:3100/resturant",{
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rest)

    }).then(() =>{
      console.log("A NEW TODO HAS BEEN ADDED")
    })
  }

  const deleteTodo = (id:number) => {
    fetch(`http://localhost:3100/resturant/${id}`,{
      method:'DELETE'
    }).then(() => {
      console.log('Todo Deleted')
      
    })

  }

  return (
    <main>
        <h1 className="text-slate-200 text-center text-4xl mb-8">Chibuikem Nwauche</h1>
        <h2 className="text-slate-200 text-center text-3xl mb-6">Review Application</h2>

        <form onSubmit={handleSubmit}>
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
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                  
                    {resturant.map(rest => (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={rest.id}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            {rest.authorname}
                        </th>
                        <td className="px-6 py-4">
                            {rest.resturantname}
                        </td>

                        <td className="px-6 py-4">
                            {rest.body}
                        </td>

                        <td className="px-6 py-4">
                        <a className="mt-2 inline-flex items-center px-3 py-2 text-center text-white 
                            bg-red-500 rounded-lg rounded-lg hover:bg-red-900" onClick={()=>{
                                deleteTodo(rest.id)
                            }}>Delete</a>
                        </td>  
                      </tr>
                    ))}    
                </tbody>
            </table>
        </div>

    </main>
  )
}

