import React from 'react';
import Countdown from './Countdown';
import Navbar from './Navbar';
import { AmplifySignOut } from '@aws-amplify/ui-react'

export default function Home(props) {
  return (
  <div>
    <Navbar />
    <Countdown  />
    <AmplifySignOut />

  </div>
  )
  }
