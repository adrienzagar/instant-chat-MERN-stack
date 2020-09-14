import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import Sidebar from '../Sidebar/Sidebar';
import Chat from '../Chat/Chat';
import './styles.scss';
import Pusher from 'pusher-js'

function App() {

  const [messages, setMessages] = useState([]);
  const [chatrooms, setChatroom] = useState([])

  useEffect(() => {
    axios.get("/messages/sync")
      .then((response) => {
        console.log(response.data)
        setMessages(response.data)
      })
  }, [])

  useEffect(() => {
    axios.get("/chatroom/sync")
      .then((response) => {
        console.log(response.data, "ChatRoom")
        setChatroom(response.data)
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

    const chatroomsChannel = pusher.subscribe('chatrooms');
    chatroomsChannel.bind('inserted', (newChatroom) => {
      setChatroom([...chatrooms, newChatroom])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
      chatroomsChannel.unbind_all();
      chatroomsChannel.unsubscribe();
    }
  }, [messages, chatrooms])

  // console.log(messages, 'is my array filled up ? ')

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar chatrooms={chatrooms} />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
