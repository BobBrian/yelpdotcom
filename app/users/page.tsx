import { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import GetAllUsers from '../lib/getAllUsers'

export const metadata:Metadata ={
    title:'Users'
}



export default async function Users() {

    const userData: Promise<User[]> = GetAllUsers()

    const users = await userData

    console.log("HELLO")

    const content  =(
        <section>
            <h2 className="text-2xl text-slate-200 text-center">
                <Link href="/">Back to Home</Link>
            </h2>
            <br/>
            {users.map(user =>{
                return (
                    <>
                        <p key={user.id} className="text-4xl text-slate-200 text-center">
                            <Link href={`/users/${user.id}`}>{user.name}</Link>

                        </p>
                    </>
                )
            })}
        </section>
    )

  return content
}
