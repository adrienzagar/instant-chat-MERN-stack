import React, { useState } from 'react';
import './styles.scss'
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic'
import axios from '../../axios'

const Chat = ({ messages }) => {

    const [input, setInput] = useState("");

    const sendMessage = async (evt) => {
        evt.preventDefault();

        await axios.post('/messages/new', {
            "message": input,
            "name": "Will",
            "timestamp": "watchtime",
            "received": false
        })

        setInput("")
    };

    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map((message) => (
                    <p key={message.id} className={`chat__message ${message.received && "chat__reciever"}`}> 
                    <span className='chat__name'>{message.name}</span> 
                    {message.message}
                    <span className="chat__timestamp">{message.timestamp}</span>
                    </p>
                ))}
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form >
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text"
                    />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}
export  default Chat
