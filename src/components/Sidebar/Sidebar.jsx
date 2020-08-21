import React from "react";
import "./Sidebar.css";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__headerProfile">
          <AccountCircleIcon className="sidebar__headerProfileIcon" />
        </div>
        <div className="sidebar__headerIcons">
          <IconButton className="sidebar__headerIconContainer">
            <DonutLargeIcon className="sidebar__headerIcon" />
          </IconButton>
          <IconButton className="sidebar__headerIconContainer">
            <ChatIcon className="sidebar__headerIcon" />
          </IconButton>
          <IconButton className="sidebar__headerIconContainer">
            <MoreVertIcon className="sidebar__headerIcon" />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <SearchIcon />
        <input
          className="sidebar__searchInput"
          placeholder="Search or start new chat"
          type="text"
        />
      </div>
      <div className="sidebar__chats">
        <div className="sidebar__chatsNewChat">
          <p>Add new Chat</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
