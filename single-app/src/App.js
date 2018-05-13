import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import {hashHistory, browserHistory} from "react-router"
import HashRouter from "react-router-dom/HashRouter";
import Switch from "react-router-dom/Switch";
import ReactDOM from "react-router-dom/ReactDOM";
import Login from "./login/Login";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Router history={hashHistory}>
        
        <Route path="/" component={Login} />
      </Router>
    </Switch>
 </HashRouter>,

  document.getElementById("root")
);
