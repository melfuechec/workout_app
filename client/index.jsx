import * as React from "react";
import * as ReactDom from "react-dom";
import App from "./App.js";
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDom.render(<App />, document.getElementById("root"));
