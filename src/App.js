// import React, { component } from 'react';
import React, { useState } from 'react'
import './App.css'


function App() {

  const [input, setInput] = useState('Hello');  
  const [Messages, setMessages]= useState([]);

  // console.log(input)
  console.log(Messages)


  const sendMessage = (event) => {
    setMessages([...Messages, input]);
    setInput('');

  }

  return (
    <div className="App">

      <h1>Msingi Messager</h1>

      {/* Input field */}
      <input
        value={input}
        onChange={event => setInput(event.target.value)}
      />

      {/* Button */}
      <button onClick={sendMessage}>Enter Message</button>

      {/* Messages */}
      {
        Messages.map(message => (
        <p>{Messages}</p>
        ))
      }

    </div>
  
  )
}

export default App