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
import Auth from '@aws-amplify/auth';


function App() {
    let user = Auth.currentAuthenticatedUser();  

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
        </div>
      </Provider>
    </Router>
  )
}

export default App

// You have deployed a web application using AWS Amplify! You have added authentication 
// to your app allowing users to sign up, sign in, and manage their account. The app also 
// has a scalable GraphQL API configured with an Amazon DynamoDB database allowing users 
// to create and delete notes. You have also added file storage using Amazon S3 allowing 
// users to upload images and view them in their app.