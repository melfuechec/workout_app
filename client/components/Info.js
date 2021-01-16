import React from 'react';
import Navbar from './Navbar';
import { AmplifySignOut } from '@aws-amplify/ui-react'


export default function Info() {
    return (
        <div>
            <Navbar />
            <h1 align="center"> How to Do a Burpee</h1>
            <p align="center"><iframe src="https://giphy.com/embed/23hPPMRgPxbNBlPQe3" frameBorder="0" className="giphy-embed" allowFullScreen></iframe></p>

            <li> Push your hips back, bend your knees, and lower your body into a squat.</li> 
            <li> Stand with your feet shoulder-width apart, weight in your heels, and your arms at your sides.</li> 
            <li> Place your hands on the floor directly in front of, and just inside, your feet. Shift your weight onto your hands.</li> 
            <li> Jump your feet back to softly land on the balls of your feet in a plank position. Your body should form a straight line from your head to heels. Be careful not to let your back sag or your butt stick up in the air, as both can keep you from effectively working your core.</li> 
            <li>Jump your feet back so that they land just outside of your hands.</li> 
            <li>Reach your arms over head and explosively jump up into the air.</li>
            <li>Land and immediately lower back into a squat for your next rep.</li>
            <AmplifySignOut />

        </div>
    )
}