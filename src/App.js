import React, { useState, useEffect } from 'react'
import './App.css'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message'

function App() {
  const [input, setInput] = useState(['']);  
  const [Messages, setMessages]= useState([
    {username: 'Joe', text: 'Love to code'},
    {username: 'max', text: 'in the moment'}
  ]);
  const [username, setUsername]= useState('');

  useEffect(() => {
    // setUsername(prompt('Please enter you name'))
    return () => {
      
    }
  }, [input])


  const sendMessage = (event) => {
    event.preventDefault()
    setMessages([
      ...Messages, {username: username, text: input}
    ]);
    setInput('');

  }

  return (
    <div className="App">

      <h1>Msingi <br /> Messager</h1>
      <h2>welcome { username }</h2>

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
          <Message username={message.username} text={message.text} />
      
        ))  
      }
    </div>
  );
}

export default App