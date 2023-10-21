import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-4xl text-slate-200 text-center">
      Home
      <br/>
      <p>
        <Link href="/users">Users</Link>
      </p>
      

    </div>
  )
}

