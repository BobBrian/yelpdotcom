import GetUser from '@/app/lib/getUser'
import GetUserPost from '@/app/lib/getUserPost'
import React from 'react'
import { Suspense } from 'react'
import UserPostData from './components/UserPostData'

type Params  = {
    params: {
        userId: string
    }
}

export default async function UserPage({params: {userId}}: Params) {
  const userData:Promise<User> = GetUser(userId)
  const userPostData:Promise<Post[]> = GetUserPost(userId)

  //To Get Both of the Data
  //const [user, userPosts] = await Promise.all([userData,userPostData])

  const user = await userData

  return (
    <>
      <h2>{user.name}</h2>
      <br/>
      <Suspense fallback={<h2>Loading....</h2>}>
        <UserPostData promise={userPostData}/>
      </Suspense>
    </>
  )
}

 