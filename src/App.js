// import React, { component } from 'react';
import React, { useState } from 'react'
import './App.css'
import { Button } from '@material-ui/core';



function App() {

  const [input, setInput] = useState(['']);  
  const [Messages, setMessages]= useState([]);

  // console.log(input)
  console.log(Messages)


  const sendMessage = (event) => {
    event.preventDefault()
    setMessages([...Messages, input]);
    setInput('');

  }

  return (
    <div className="App">

      <h1>Msingi Messager</h1>
      <form>
        {/* Input field */}
        <input
          value={input}
          onChange={event => setInput(event.target.value)}
        />

        {/* Button */}
        <button variant type='submit' onClick={sendMessage}>Enter Message</button>

      </form>

      {/* Messages */}
      {
        Messages.map(message => (
        <p>{message}</p>
        ))
      }

    </div>
  
  )
}

export default App