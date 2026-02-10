import React, { use } from 'react'
import { useState } from 'react'
export default function App() {
  const [userName] = useState{"Vijay"}
  return (
    <div>
      <h1>Happy New year {userName} </h1>
    </div>
  )
}