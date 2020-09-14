import React, { useEffect, useState } from 'react'
import './styles.scss'
import { Avatar } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import axios from '../../axios'

const SidebarChat = ({ addNewChat, chatrooms }) => {
    const [seed, setSeed] = useState("")
    const [input, setInput] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = async (evt) => {
        evt.preventDefault();
        // const roomName = prompt("Please enter name for chat");

        if (input) {
            axios.post('/chatroom/new', {
                name: input
            })
        }

        setInput("")
    }

    // console.log(chatrooms)

    return !addNewChat ? (
        chatrooms.map(({ name, _id }) => {
            console.log(name, _id)
            return (
                <div className="sidebarChat">
                    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                    <div key={_id} className="sidebarChat__info">
                    <h2>{name}</h2>
                        <p>this is the last message</p>
                    </div>
                </div>
            )
        })
    ) : (
        <div className="sidebarChat__add">
            <form action="">
            <AddCircleIcon />
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a new chatroom"
                />
                 <button onClick={createChat} type="submit">Add New Chat</button>
            </form>
        </div>
    )
}


export default SidebarChat