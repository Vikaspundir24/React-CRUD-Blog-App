import React from 'react'
import { useUserAuth } from '../Context/UserAuthContext'

function Home() {

  let {user} = useUserAuth()
  return (
    <div>Welcome to blog website {user.email}</div>
  )
}

export default Home