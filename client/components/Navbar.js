import React from 'react';
import {
  Link
} from "react-router-dom";

export default function Navbar() {
    return (
        <div id='navbar'>
            <Link to="/home">Home</Link>
            <Link to="/progress">Progress</Link>
            <Link to="/info">Info</Link>  
        </div>
    )
}