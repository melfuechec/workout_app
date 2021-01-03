import React from 'react';
import Navbar from './Navbar';

export default function Landing() {
    return (
        <div>
            <Navbar />
            <h1 align="center">Landing Page</h1>
            Some info about the burpee challenge
            <button>Sign Up</button>
            <button>Log In</button>
        </div>
    )
}