import React from 'react';
import Countdown from './Countdown';
import Navbar from './Navbar';
import { withAuthenticator } from 'aws-amplify-react';
import { AmplifySignOut } from '@aws-amplify/ui-react'

function Home(props) {
  return (
  <div>
    <Navbar />
    <Countdown  />
    <AmplifySignOut />

  </div>
  )
  }
  export default withAuthenticator(Home);
