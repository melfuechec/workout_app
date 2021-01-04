import React from "react";
import Landing from './components/Landing';
import Progress from './components/Progress';
import Info from './components/Info';
import {Switch, Route}  from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './configure-store';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Home from './components/Home';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {

  return (
    <Router>
      <Provider store={store}>
        <div id="container">
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/progress">
              <Progress />
            </Route>
            <Route path="/info">
              <Info />
            </Route>
          </Switch>
          <AmplifySignOut />

        </div>
      </Provider>
    </Router>
  )
}

export default withAuthenticator(App);