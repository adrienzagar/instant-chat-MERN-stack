import React from 'react';
import './styles.scss'
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon } from '@material-ui/icons';

const Chat = () => {
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
                <p className="chat__message"> 
                    <span className='chat__name'>Adrien</span> 
                    <span className="chat__timestap">{new Date().toUTCString()}</span>
                    This is a message
                </p>

                <p className="chat__message chat__reciever"> 
                    <span className='chat__name'>Adrien</span> 
                    <span className="chat__timestap">{new Date().toUTCString()}</span>
                    This is a message
                </p>

                <p className="chat__message"> 
                    <span className='chat__name'>Adrien</span> 
                    <span className="chat__timestap">{new Date().toUTCString()}</span>
                    This is a message
                </p>
            </div>

            <div className="chat_footer">
                <InsertEmoticon />
                <form >
                    <input
                        placeholder="Type a message"
                        type="text"
                    />
                    <button type="submit">Send a message</button>
                </form>

            </div>
        </div>
    )
}
export  default Chat
