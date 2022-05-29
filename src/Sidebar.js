//ES7 snippets - install them
import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Button} from '@mui/material';

function Sidebar() {
    return(
            <div className='sidebar'>
                    <TwitterIcon className='sidebar__twitterIcon' />
                    <SidebarOption 
                    isActive
                    icon={<HomeIcon />}
                    text="Home"
                    />
                    <SidebarOption
                    icon={<SearchIcon />}
                    text="Explore"
                    />
                    <SidebarOption
                    icon={<NotificationsNoneIcon />}
                    text="Notifications"
                    />
                    <SidebarOption 
                    icon={<MailOutlineIcon />}
                    text="Messages"
                    />
                    <SidebarOption
                    icon={<BookmarkBorderIcon />}
                    text="Bookmark"
                    />
                    <SidebarOption
                    icon={<ListAltIcon />}
                    text="Lists"
                    />
                    <SidebarOption
                    icon={<PermIdentityIcon />}
                    text="Profile"
                    />
                    <SidebarOption
                    icon={<MoreHorizIcon />}
                    text="More"
                    />
                    
                    <Button variant="outlined" className="sidebar__tweet" fullwidth>Tweet</Button>
            </div>
    )
}

export default Sidebar

