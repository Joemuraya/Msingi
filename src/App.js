// import React, { component } from 'react';
import React, { useState } from 'react'
import './App.css'


function App() {

  const [input, setInput] = useState('');  

  return (
    <div className="App">

      <h1>Msingi Messager</h1>

      {/* Input field */}
      <input
        value={input}
        onChange={event => setInput(event.target.value)}
      />

      {/* Button */}
      <button>Enter Message</button>

      {/* Messages */}

    </div>
  
  )
}

export default App