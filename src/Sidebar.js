import React, { useState,useEffect } from 'react'
import "./Sidebar.css"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from './SidebarOption';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";

import db from './firebase';
import { useStateValue } from './StateProvider';
function Sidebar() {
    const [channels,setChannels]=useState([]);
    const [{user}]=useStateValue();
    useEffect(() => {
        //Runs once when the sidebar component loads
        db.collection('rooms').onSnapshot((snapshot)=>(
            setChannels(
                snapshot.docs.map(doc=>({
                    id:doc.id,
                    name:doc.data().name
                }))
            )
        ))
    }, [])
    //console.log(channels);
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>{user?.name}</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        {user?.displayName}
                    </h3>
                </div>    
                <CreateIcon/>
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threading"/>
            <SidebarOption Icon={InboxIcon} title="Inbox"/>
            <SidebarOption Icon={DraftsIcon} title="Drafts"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Bookmarks"/>
            <SidebarOption Icon={FileCopyIcon} title="Copy"/>
            <SidebarOption Icon={PeopleAltIcon} title="People"/>
            
            <hr/>
            <SidebarOption  Icon={ExpandMoreIcon} title="Channels"/>
            <SidebarOption  Icon={AddIcon} title="Add Channels" addChannelOption/>
            {/* Connect to db and list all the channels */}
            
            {channels.map(channel=>(
                <SidebarOption title={channel.name} id={channel.id} />
            
                )    )}
        </div>
    )
}

export default Sidebar
