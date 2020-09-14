import React from 'react';
import './styles.scss';
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import SidebarChat from './SidebarChat';

const Sidebar = ({ chatrooms }) => {
    console.log(chatrooms, "chatroom of sidebar")

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://avatars2.githubusercontent.com/u/59897360?s=460&u=ef01dbf9a856c3d927d5f076691ca078bb9cee33&v=4" />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search of start new chat" type="text"/>
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                <SidebarChat chatrooms={chatrooms} />
            </div>
        </div>
    )
}

export default Sidebar

