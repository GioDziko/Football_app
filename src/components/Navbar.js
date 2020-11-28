import React from "react";
import "./navbar.css";
import { BiFootball } from 'react-icons/bi';

export default function Navbar(){
    return(
        <div className="navbar" >
            
            <p className="caption" >Allscores</p>
            <BiFootball className="icon" />
            
        </div>
    );
}