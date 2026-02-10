import React, { useState, StrictMode } from 'react';
export default function Inputexample() {
  const [userName, setUsername] = useState("");
  return (
    <StrictMode>
      <div>
        <input
          type='text'
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h1>My name is {userName}</h1>
      </div>
    </StrictMode>
  );
}