import React from 'react'
import { useState } from 'react'

export default function App() {
  const [userName, setUsername]=useState("Nanba")
  return (
    <div>
      <h1>Happy Deepawali {userName}!</h1>
    </div>
  )
}