import React, { useState, useEffect, useRef } from 'react';
import './Sidebar.css'; // Import CSS file for styling

const Sidebar = () => {

    return (
        <div className="sidebar">
            <ul>
                <li><a href="#pitch" >Pitch</a></li>
                <li><a href="#leadership">Leadership</a></li>
                <li><a href="#opportunity">Opportunity</a></li>
                <li><a href="#market-traction">Market & Trac..</a></li>
                <li><a href="#biz-model">Biz. model</a></li>
                <li><a href="#competition">Competition</a></li>
                <li><a href="#summary">Summary</a></li>
                <li><a href="#disclaimers">Disclaimers</a></li>
                <hr className='sidebar-hr'/>
                <li><a href="#about">About</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#press">Press</a></li>
                <li><a href="#risks">Risks</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
