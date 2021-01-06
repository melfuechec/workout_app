import React from 'react';
import Navbar from './Navbar';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function Landing() {
    return (
        <div>
            <Navbar />
            <AmplifySignOut />
        </div>
    )
}

export default withAuthenticator(Landing);