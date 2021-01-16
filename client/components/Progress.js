import { withAuthenticator } from 'aws-amplify-react';
import React from 'react';
import Navbar from './Navbar';
import { Chart } from "react-google-charts";
import { AmplifySignOut } from '@aws-amplify/ui-react'


function Progress() {

    return (
        <div>
            <Navbar />
            <h1 align="center">Progress</h1>
            <Chart
            width={'600px'}
            height={'400px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['x', 'Finish Time'],
              [0, 0],
              [1, 10],
              [2, 23],
              [3, 17],
              [4, 18],
              [5, 9],
              [6, 11],
              [7, 27],
              [8, 33],
              [9, 40],
              [10, 32],
              [11, 35],
            ]}
            options={{
              hAxis: {
                title: 'Day of Challenge',
              },
              vAxis: {
                title: 'Minutes',
              },
            }}
            rootProps={{ 'data-testid': '1' }}
          />
          <AmplifySignOut />

        </div>
    )
}
export default withAuthenticator(Progress);