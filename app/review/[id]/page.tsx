import getResturant from '@/app/api/getResturant'
import Link from 'next/link'
import React from 'react'

type Params  = {
    params: {
        id: string
    }
}

export default async function ReviewDetails({params: {id}}: Params) {

    const userData:Promise<Resturant> = getResturant(id)

    const user = await userData

    return (
        <>
        <div key={user.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow items-center pt-16 pr-16 pb-8 pl-16  m-auto z-2">
                <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Review By {user.authorname}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">For {user.resturantname}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{user.body}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium 
                text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 
                focus:outline-none focus:ring-blue-300">
                    <Link href="/table">Back</Link>   
                </a>
        </div>
        </>
      )
}
