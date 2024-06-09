import React from 'react'
import NavBar from './NavBar'

export default function AddFurniture({isLoggedIn}) {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
      {isLoggedIn? <h1>Currently Under Development</h1>: <h1>Login</h1>}
      </main>
    </div>
  )
}
