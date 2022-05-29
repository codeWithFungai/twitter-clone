import React from 'react'
import './SidebarOption.css'
//SidebarOption takes props for the text, icon and active status 
function SidebarOption({ isActive, text, icon }) {
    return (
        //isActive will check to see which sidebarOption is active and highlight it in twitter blue
        <div className={`sidebarOption ${isActive && 'sidebarOption--active'}`}>
             <div>{icon}</div>
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption

