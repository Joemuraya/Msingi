// import React, { component } from 'react';
import React, { useState } from 'react'
import './App.css'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message'


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

      <h1>Msingi <br /> Messager</h1>
      <form>
        {/* Input field */}
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>

      </form>

      {
        Messages.map(message => (
          <Message text={message} />
      
        ))  
      }
    </div>
  );
}

export default App