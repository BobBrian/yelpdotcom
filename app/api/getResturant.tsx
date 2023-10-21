import React from 'react'

export default async function getResturant(id:string) {
    const res = await fetch(`http://localhost:3100/resturant/${id}`)
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json()
}
