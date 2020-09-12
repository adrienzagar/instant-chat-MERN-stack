import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import Sidebar from '../Sidebar/Sidebar';
import Chat from '../Chat/Chat';
import './styles.scss';
import Pusher from 'pusher-js'

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync")
      .then((response) => {
        console.log(response.data)
        setMessages(response.data)
      })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('1e365354b100ee866cd1', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])

  console.log(messages, 'is my array filled up ? ')

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
